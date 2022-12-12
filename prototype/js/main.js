//select location is the form name
$('#selectlocation').submit(function(){
//get current value and add item to the list
var selectAberdeen = $('#selectAberdeen').val();
//call our search tomtom api function
getresultsfromAberdeen(selectAberdeen);
return false;
})

function getresultsfromTOM(selectAberdeen){
//london lat and longitude
var lat =51.5072;
var lon =0.1276;
//call tomtom api using ajax
//create url for the request
//search for location 
var url = "https://api.tomtom.com/search/2/categorySearch/electric%20vehicle%20station.json?lat="+lat+"&lon="+lon+"&extendedPostalCodesFor=POI&key=ATlNGAgAIlTGEzrIwm0GEfHv0AUm1364"
$.getJSON(url, function(jsondata){
    //handle results
    console.log(jsondata)

    var listofpoints = jsondata.results;

    listofpoints.forEach(function (point){
        //search for availability 
        var url2 = "https://api.tomtom.com/search/2/chargingAvailability.json?chargingAvailability="+point.id+"&key=ATlNGAgAIlTGEzrIwm0GEfHv0AUm1364"
        $.getJSON(url2, function(jsondata2){
            console.log(jsondata2)
        });
    });
   //addResults(jsondata);
});

}


function addResults(jsondata) {
    var htmlstring = "";

    for (var i=0; i<10; i++){
        var title = jsondata.Search[i].Title;
        htmlstring += "<li>" + title + "</li>"
    }
}

//select location is the form name
$('#selectlocation').submit(function(){
    //get current value and add item to the list
    var selectLondon = $('#selectLondon').val();
    //call our search tomtom api function
    getresultsfromAberdeen(selectLondon);
    return false;
    })
    
    function getresultsfromTOM(selectLondon){
    //london lat and longitude
    var lat =51.5072;
    var lon =0.1276;
    //call tomtom api using ajax
    //create url for the request
    //search for location 
    var url = "https://api.tomtom.com/search/2/categorySearch/electric%20vehicle%20station.json?lat="+lat+"&lon="+lon+"&extendedPostalCodesFor=POI&key=ATlNGAgAIlTGEzrIwm0GEfHv0AUm1364"
    $.getJSON(url, function(jsondataLon){
        //handle results
        console.log(jsondataLon)
    
        var listofpoints = jsondataLon.results;
    
        listofpoints.forEach(function (point){
            //search for availability 
            var url2 = "https://api.tomtom.com/search/2/chargingAvailability.json?chargingAvailability="+point.id+"&key=ATlNGAgAIlTGEzrIwm0GEfHv0AUm1364"
            $.getJSON(url2, function(jsondataLon2){
                console.log(jsondataLon2)
            });
        });
       addResults(jsondataLon);
    });
    
    }

    