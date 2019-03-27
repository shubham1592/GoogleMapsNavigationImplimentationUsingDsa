
exports.auth = function(qobj, con, retur) {
    console.log("Idhar Aya");
    var t = '';
if (qobj.id == 1){
            console.log("Connected!");
            var check = "SELECT * FROM logincredentials WHERE username = ?";
            var newuser = "INSERT INTO loginCredentials (username, password) VALUES ?";
            var datauser = [[qobj.user, qobj.password]];

            con.query(check, [[qobj.user]], function(err, result){
            if(JSON.stringify(result) != '[]'){       
                t = "Already Registered! 😉";
                retur(t);
                }
            else{
            con.query(newuser ,[datauser],function(err, result){
                if(err) throw err;
                t = "Your all new account has been created! 😄";
                retur(t);
            });
        }
    });
    }
    if(qobj.id == 0){
                console.log("Connected! Niche");
                var check = "SELECT * FROM logincredentials WHERE username = ?";
                var data = [qobj.user];
                con.query(check, [[data]], function(err, result){
                    if (err) throw err;
                    console.log(JSON.stringify(result));
                    if(JSON.stringify(result) == '[]'){    
                            t = "The ID isn't Registered! 😞";
                            retur(t);
                        }
                     else {  if(result[0].password == qobj.password){
                             t = "Welcome! we are family 😊";
                             console.log("andar bhi!");
                             retur(t);
                        }
                        else{
                             t = "Wrong Password! 😶";
                             retur(t);
                        }
                    }
                    });     
    }
};