var xhttp = new XMLHttpRequest();

var select = 0;
var quer ="";
var count = 0;

function relog(sel){
    if(count%2 == 0){
    document.getElementById('regis').style.backgroundColor = 'grey';
    document.getElementById('regis').innerHTML = 'LOGIN';
    document.getElementById('head').innerHTML = 'REGISTER';
    document.getElementById('lsay').innerHTML = 'Select ID';
    select = 1;
    }
    else{
        document.getElementById('regis').style.backgroundColor = 'red';
        document.getElementById('regis').innerHTML = 'REGISTER';
        document.getElementById('head').innerHTML = 'LOGIN';
        document.getElementById('lsay').innerHTML = 'Registration ID';
        select = 0;    
    }
    count++;
  
}
        
        function validate() {
            quer = "http://localhost:8080/?id="+select+
            "&user="+document.getElementById("say").value+
            "&password="+document.getElementById("to").value;
        var test = "hey";
        
        xhttp.onreadystatechange = function() {
            console.log(this.readState);
             if(this.readyState == 4 && this.status == 200){
                console.log(this.responseText);
                document.getElementById('response').innerHTML = this.responseText;
                test = this.responseText;
                if(test == "Welcome! we are family 😊"){
                    window.location = "http://localhost:8080/home.html";
                }
            }
        };
        xhttp.open("GET", quer, true );
        xhttp.send();
        console.log(test);
       

}