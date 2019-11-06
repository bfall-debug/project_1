//=========== Get UserLocation ==========
    var UserLocation = {
        streetNum: "1",
        street: "Main Street",
        state: "New Hampshire",
        country: "United States",
        zipCode: "02101",
        city: "Boston",
        country: "US",
        lon: 42.36,
        lat: 71.06
    }

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {

            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            var apiKey = "AIzaSyDkdADIWzYkNhrbjRk7g80ZqWeg6j-vnoE";
            var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`

            $.ajax({
                url: url,
                method: "GET",
            }).then(function (a) {
                 UserLocation = {
                    streetNum: a.results[0].address_components[0].long_name,
                    street: a.results[0].address_components[1].long_name,
                    city: a.results[0].address_components[2].long_name,
                    state: a.results[0].address_components[4].long_name,
                    country: a.results[0].address_components[5].long_name,
                    zipCode: a.results[0].address_components[6].long_name,
                    lon: position.coords.longitude,
                    lat: position.coords.latitude,
                    geoHash: Geohash.encode(position.coords.latitude,position.coords.longitude,4)
                }
                ticketmasterAPI(UserLocation.geoHash);

            })
            
        });
    } else {
        alert("Browser doesn't support geolocation!");
    }

    // =============== Get Related Artists ==============
function relatedArtists(artist) {

    var artists = ["The Beatles", "Ariana Grande", "Blink 182", "Eminem"];

    return artists;
}

//=========== Get Events ==========
  
    function ticketmasterAPI(geoHash){
        latlong = "40.36-70.67"
        var apiKey = "c5IiGTZWs4t9H3rW0Nx4pFCbT5Koq6NK";
        var genre = "KnvZfZ7vAvv"
        var radius = 100
        var url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&classificationId=${genre}&geoPoint=${geoHash}&radius=${radius}`
        $.ajax({
            url: url,
            method: "GET",
        }).then(function (a) {
            
           // FUNCTION DECLARATIONS THAT NEED TO USE USERLOCATION
            
            var events = a._embedded.events;
            console.log(events)
            localStorage.setItem("allEvents", JSON.stringify(events));
            $(".main-container").empty();
            for(var i = 0; i < events.length; i++){
                // RACHAEL INSERT FUNCTION HERE
                renderResults(events[i],i);
                console.log(events[i])

        
            }

        });
    }









