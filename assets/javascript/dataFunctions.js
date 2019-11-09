var apiKeys = ["apikey=c5IiGTZWs4t9H3rW0Nx4pFCbT5Koq6NK","apikey=r9XUBqAXvebp3AcDRZckLlwSKgLAe4sd"]
var TmApiKey = apiKeys[1];
var TmQuery = `https://app.ticketmaster.com/discovery/v2/events.json?${TmApiKey}`;


$(document).on("click","#submitBtn", function(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(function (position) {
  geoHash = Geohash.encode(position.coords.latitude,position.coords.longitude,4)

  var geoHash = `&geoPoint=${geoHash}`
  var radius = `&radius=${$("#radius-dropdown").val()}`
  var genre = `&classificationId=${getGenre()}`
  var size = `&size=${$("#size-dropdown").val()}`
  var type = "&classificationName=music";
  var url = TmQuery + `${genre}${geoHash}${radius}${type}${size}`
  ticketmasterAPI(url);    
  });
});


function ticketmasterAPI(url){
    $.ajax({
        url: url,
        method: "GET",
        fail: function(xhr, textStatus, errorThrown){
          alert('request failed');
       }
    }).then(function (a) {
      if(a.page.totalElements == 0){
        $(".main-container").empty();
        var $container = $("<div id='dropdown-container' class='row'>")
        $(".main-container").append($container)
        $container.append("<form id='newForm'>")
        createDropDown("genre",genres);
        createDropDown("size",size);
        createDropDown("radius",radius);
        $("form").append($("<button class='btn waves-effect waves-light col s12 m3'style='maring-top:10px;' type='submit' name='action' id='refreshBtn'>Find Shows <i class='chevron_right'></i></button>'"))
        $(".main-container").append($("<h1> No Records Found That Satisfied Your Search Conditions, Please Change Filters and Search Again! </h1>"))
        return;
      }
        var events = a._embedded.events

        localStorage.setItem("allEvents", JSON.stringify(events));
        $(".main-container").empty();
        var $container = $("<div id='dropdown-container' class='row'>")
        $(".main-container").append($container)
        $container.append("<form id='newForm'>")
        createDropDown("genre",genres);
        createDropDown("size",size);
        createDropDown("radius",radius);
        $("form").append($("<button class='btn waves-effect waves-light col s12 m3'style='maring-top:10px;' type='submit' name='action' id='submitBtn'>Find Shows <i class='chevron_right'></i></button>'"))
        
        for(var i = 0; i < events.length; i++){
            renderResults(events[i],i);
        }

    });
}








function getGenre(){
    var selectedGenre2 = $("#genre-dropdown")
    for(var i = 0; i < genres.length; i++){
      
      if(selectedGenre2.val() == genres[i][0]){
        var genreId = genres[i][1];
      }
    }
    return genreId
}
