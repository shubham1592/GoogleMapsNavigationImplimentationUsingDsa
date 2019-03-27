var http = require('http');
var url = require('url');
var fs = require('fs');
var la = require('./loginAuth');
var sql = require('mysql');

var con = sql.createConnection({
    host: "us-cdbr-iron-east-03.cleardb.net",
    user: "bdfce9d5e367f0",   //root
    password:"cc3917d5",    //bharat1@
});


con.query("CREATE DATABASE test",function(err, result){
    if(err) throw err;
    console.log("Database created");
});

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var qobj = q.query;
    console.log(q);
    console.log(req.url.slice(1));
    if(JSON.stringify(qobj) == "{}"){
     var sor = req.url.slice(1);
     console.log(qobj.auth);
     if(sor == ''){
         sor = "login.html";
    }
        try{var daat = fs.readFileSync(sor);}
        catch(error) {
            console.log(error);
            var daat = fs.readFileSync('error.html');}
        res.writeHead(200);
        res.write(daat);
        res.end();
    }
    else{
        la.auth(qobj,con, function(data){
            console.log(data);
            res.writeHead(200, {'Content-Type': 'text/html'});        
            res.write(data);
            res.end();
        });
    }
    
}).listen(8080);