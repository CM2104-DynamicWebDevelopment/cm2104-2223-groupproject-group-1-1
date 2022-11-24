$('#selectlocation').submit(function(){
//get current value and add item to the list
var selectAberdeen = $('#selectAberdeen').val();
//call our search tomtom api function
getresultsfromTOM(selectAberdeen);
return false;
})


function getresultsfromTOM(seachterms){
//call tomtom api using ajax
//create url for the request
var url "https://api.tomtom.com/search/2/fuelPrice.JSON?key=ATlNGAgAIlTGEzrIwm0GEfHv0AUm1364&fuelPrice=fuelPrice" + searchterms;
$.getJSON(URL, function(jsondata){
    //handle results
    addResults(jsondata);
});

}

function addResults(jsondata) {
    var htmlstring = "";

    for (var i=0; i<10; i++){
        var title = jsondata.Search[i].Title;
        htmlstring += "<li>" + title + "</li>"
    }
}