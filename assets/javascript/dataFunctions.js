var apiKeys = ["apikey=c5IiGTZWs4t9H3rW0Nx4pFCbT5Koq6NK","apikey=r9XUBqAXvebp3AcDRZckLlwSKgLAe4sd"]
var TmApiKey = apiKeys[1];
var TmQuery = `https://app.ticketmaster.com/discovery/v2/events.json?${TmApiKey}&size=5`;


$("#submitBtn").on("click", function(event){
  event.preventDefault();
navigator.geolocation.getCurrentPosition(function (position) {
    geoHash = Geohash.encode(position.coords.latitude,position.coords.longitude,4)

    var geoHash = `&geoPoint=${geoHash}`
    var radius = `&radius=${100}`
    var genre = `&classificationId=${getGenre()}`
    var type = "&classificationName=music";
    var url = TmQuery + `${genre}${geoHash}${radius}${type}`
    ticketmasterAPI(url);    
    });
    
});

function ticketmasterAPI(url){
    $.ajax({
        url: url,
        method: "GET",
    }).then(function (a) {
        var events = a._embedded.events

        localStorage.setItem("allEvents", JSON.stringify(events));
        $(".main-container").empty();
        var $container = $("<div id='dropdown-container' class='row'>")
        $(".main-container").append($container)
        createDropDown("genre");
        createDropDown("size");
        createDropDown("radius");

        for(var i = 0; i < events.length; i++){
            renderResults(events[i],i);
        }

    });
}

function getGenre(){
    var selectedGenre = $(".genre-dropdown")[0].value
    var genreId = ""
    for(var i = 0; i < genres.length; i++){
      if(selectedGenre == genres[i][0]){
        var genreId = genres[i][1];
      }
    }
    return genreId
}

//======= API call for rachael for favorites event ======

//====================================================
