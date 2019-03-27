const spwan = require('child_process').spawn;
const https = require('http');
const url = require('url');
const fs = require('fs');



https.createServer(function (req, res){
    var q = url.parse(req.url, true);
    var urlobj = q.query;
    console.log(urlobj.id);
    if(JSON.stringify(urlobj) == "{}"){
        var sor = req.url.slice(1);
        console.log(urlobj.auth);
        if(sor == ''){
            sor = "home.html";
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
    switch(urlobj.id){
        case '1': {
                console.log("aaya");
                const pythonProcess = spwan('python', ["dijkstra.py", urlobj.src,urlobj.dest ]);
                pythonProcess.stdout.on('data', (data)=>{
                console.log(String(data));
                var arr = JSON.parse(data);
                console.log(String(data));
                res.write(data);
                res.end();
                });
        }            
    }
}
}).listen(process.env.PORT ||8080);


