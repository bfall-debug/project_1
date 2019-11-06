var TmApiKey = "apikey=c5IiGTZWs4t9H3rW0Nx4pFCbT5Koq6NK";
var TmQuery = `https://app.ticketmaster.com/discovery/v2/events.json?${TmApiKey}`;


$("#submitBtn").on("click", function(event){
  event.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
        geoHash = Geohash.encode(position.coords.latitude,position.coords.longitude,4)
        ticketmasterAPI(geoHash);
    });
});

function ticketmasterAPI(geoHashCoords){
    latlong = "40.36-70.67";
    var geoHash = `&geoPoint=${geoHashCoords}`
    var radius = `&radius=${100}`
    var genre = `&classificationId=${getGenre()}`
    var type = "&classificationName=music";
    
    var url = TmQuery + `${genre}${geoHash}${radius}${type}`
    $.ajax({
        url: url,
        method: "GET",
    }).then(function (a) {
       var events = a._embedded.events;
       localStorage.setItem("allEvents", JSON.stringify(events));
       $(".main-container").empty();
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





