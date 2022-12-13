//select location is the form name
$(function(){
    $('#selectlocation').submit(function(){
        //get current value and add item to the list
        var selectAberdeen = $('#selectAberdeen').val();
        //call our search tomtom api function
        getresultsfromTOM(selectAberdeen);
        console.log("here")
        return false;
    });
});

getresultsfromTOM("test");

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
            addResultsAvail(jsondata2)
            console.log(jsondata2)
        });
    });
   //PrintJSON(jsondata2);
});

}

function addResultsAvail(jsondata2) {
    var htmlstring = "";

    for (var i=0; i<10; i++){
        var Connectors = jsondata2.Search[i].connectors;
        htmlstring += "<li>" + connectors + "</li>";
    }

    $("#results").html(htmlstring);
}

