var xhttp = new XMLHttpRequest();
var data = '';
 function callme(){
    var list = [];
    var dist = 0;
    console.log(window.location.href);
    var query = window.location.href+"?id=1"+"&src="+document.getElementById('source').options[document.getElementById('source').options.selectedIndex].value+
                "&dest="+document.getElementById('destination').options[document.getElementById('destination').options.selectedIndex].value;
        xhttp.onreadystatechange= function(){
            if(this.readyState == 4 && this.status == 200){
                console.log(this.responseText);
                data = JSON.parse(this.responseText);
                console.log("Ye Dekh: "+ data.path[0]);
                for(var i = 0; i< data.path.length; i++){
                    list.push({"lat": data.path[i][0], "lng": data.path[i][1]});
                }
                dist = data.dist;
                var time = (dist/((document.getElementById('accomodation').options[document.getElementById('accomodation').options.selectedIndex].value)*60)).toFixed(2);
                document.getElementById('isme').innerHTML = "<br><div id = 'duri'>Distance: "+dist+" m &nbsp&nbspTime: "+time+" min</div>";
                console.log("Duri "+dist);
                console.log("rasta "+list);
                initMap(list);
            }
        };
    xhttp.open('get', query, true);
    xhttp.send();
        };
//xhttp.open('get',query, true);
function initMap(locat) {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: {lat:12.971432,lng:79.160235},
          mapTypeId: 'terrain'
        });
        console.log(locat);
        var flightPlaneCoordinates = locat;
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        flightPath.setMap(map);
    }

function show(){
    document.getElementById('map').style.width =  1000+'px';
    document.getElementById('map').style.height = 600+'px';
}
