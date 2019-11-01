function getLocation() {

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
                async: false
            }).then(function (a) {

                UserLocation = {
                    streetNum: a.results[0].address_components[0].long_name,
                    street: a.results[0].address_components[1].long_name,
                    city: a.results[0].address_components[3].long_name,
                    state: a.results[0].address_components[5].long_name,
                    country: a.results[0].address_components[6].long_name,
                    zipCode: a.results[0].address_components[7].long_name,
                    lon: position.coords.longitude,
                    lat: position.coords.latitude
                }
            })
        });
    } else {
        alert("Browser doesn't support geolocation!");
    }

    return UserLocation;
}

function relatedArtists(artist) {

    var artists = ["The Beatles", "Ariana Grande", "Blink 182", "Eminem"];

    return artists;
}

function getConcert(){
    

    var concert = {
         artist: "Taylor Swift",
         time: 0,
         venue: "Miami",
         image: $("<img>")
    }

    return concert;
}
