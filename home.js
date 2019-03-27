function chek(){
    var fun = {func: function(){return 4;}};
    var truth = '{ "ans":["2", "4", "1", "3", "1", "1", "1", "2", "1", "3"]}'
truth = JSON.parse(truth);
var answer = [];
    for(var j = 0; j < 10; j++){
    var x = document.getElementsByName("ques" + String(j+1));
    for (var i = 0; i < x.length; i++)     
        if(x[i].checked){

            if(x[i].value == truth.ans[j]) answer.push("Correct");
            else answer.push(JSON.stringify(fun));
            
        }
    if( answer.length == j ) answer.push("Not Attempted!!");
}
for (i = 0; i < answer.length; i++ )
            document.getElementById("reslt" + String(i+1)).innerHTML = answer[i];
}