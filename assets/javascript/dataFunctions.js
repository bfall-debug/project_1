$("#submitBtn").on("click", function(event){
  event.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
        geoHash = Geohash.encode(position.coords.latitude,position.coords.longitude,4)
        ticketmasterAPI(geoHash);
    });
});

function ticketmasterAPI(geoHash){
    latlong = "40.36-70.67";
    var apiKey = "c5IiGTZWs4t9H3rW0Nx4pFCbT5Koq6NK";
    var genre = getGenre();
    var radius = 100
    var url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}${genre}&geoPoint=${geoHash}&radius=${radius}`
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
    var genreString = ""
    for(var i = 0; i < genres.length; i++){
      if(selectedGenre == genres[i][0]){
        var genreId = genres[i][1];
        genreString = `&classificationId=${genreId}`
      }
    }
    return genreString
}





