// RANDOM BTN TO TEST RESULTS PAGE
$(".randomBtn").on("click", function(){
  
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

<<<<<<< HEAD
    return location;
}

var genres = [
    {"Alternative": "KnvZfZ7vAvv"},
    {"Ballads/Romantics": "KnvZfZ7vAve"},
    {"Blues": "KnvZfZ7vAvd"},
    {"Chanson Francaise": "KnvZfZ7vAvA"},
    {"Children's Music": "KnvZfZ7vAvk"},
    {"Classical": "KnvZfZ7vAeJ"},
    {"Country": "KnvZfZ7vAv6"},
    {"Dance/Electronic": "KnvZfZ7vAvF"},
    {"Folk": "KnvZfZ7vAva"},
    {"Hip-Hop/Rap": "KnvZfZ7vAv1"},
    {"Holiday": "KnvZfZ7vAvJ"},
    {"Jazz": "KnvZfZ7vAvE"},
    {"Latin": "KnvZfZ7vAJ6"},
    {"Medieval/Renaissance": "KnvZfZ7vAvI"},
    {"Metal": "KnvZfZ7vAvt"},
    {"New Age": "KnvZfZ7vAvn"},
    {"Other": "KnvZfZ7vAvl"},
    {"Pop": "KnvZfZ7vAev"},
    {"R&B": "KnvZfZ7vAee"},
    {"Reggae": "KnvZfZ7vAed"},
    {"Religious": "KnvZfZ7vAe7"},
    {"Rock": "KnvZfZ7vAeA"},
    {"World": "KnvZfZ7vAeF"}
    ];

    var stateCities = [ 
    "AK - Alaska", 
    "AL - Alabama", 
    "AR - Arkansas", 
    "AS - American Samoa", 
    "AZ - Arizona",
    "AZ - Phoenix",
    "AZ - Tucson", 
    "AZ - Mesa",
    "CA - California",
    "CA - Los Angeles",
    "CA - San Diego",
    "CA - San Jose", 
    "CA - San Francisco",
    "CA - Fresno",
    "CA - Sacramento",
    "CA - Long Beach",
    "CA - Oakland",
    "CO - Colorado",
    "CO - Denver", 
    "CO - Colorado Springs",
    "CT - Connecticut", 
    "DC - District of Columbia", 
    "DE - Delaware", 
    "FL - Florida",
    "FL - Jacksonville",
    "FL - Miami", 
    "GA - Georgia", 
    "GA - Atlanta",
    "HI - Hawaii", 
    "IA - Iowa", 
    "ID - Idaho", 
    "IL - Illinois",
    "IL - Chicago", 
    "IN - Indiana",
    "IN - Indianapolis", 
    "KS - Kansas",
    "KS - Wichita", 
    "KY - Kentucky",
    "KY - Louisville", 
    "LA - Louisiana",
    "LA - New Orleans", 
    "MA - Massachusetts",
    "MA - Boston", 
    "MD - Maryland",
    "MD - Baltimore", 
    "ME - Maine", 
    "MI - Michigan",
    "MI - Detroit", 
    "MN - Minnesota",
    "MN - Minneapolis", 
    "MO - Missouri",
    "MO - St. Louis",
    "MO - Kansas City", 
    "MS - Mississippi", 
    "MT - Montana", 
    "NC - North Carolina",
    "NC - Charlotte", 
    "NC - Raleigh",
    "ND - North Dakota", 
    "NE - Nebraska",
    "NE - Omaha", 
    "NH - New Hampshire", 
    "NJ - New Jersey", 
    "NM - New Mexico",
    "NM - Albuquerque", 
    "NV - Nevada",
    "NV - Las Vegas", 
    "NY - New York",
    "NY - New York City", 
    "OH - Ohio",
    "OH - Columbus",
    "OH - Cleveland", 
    "OK - Oklahoma",
    "OK - Oklahoma City",
    "OK - Tulsa", 
    "OR - Oregon",
    "OR - Portland", 
    "PA - Pennsylvania",
    "PA - Philadelphia", 
    "RI - Rhode Island", 
    "SC - South Carolina", 
    "SD - South Dakota", 
    "TN - Tennessee",
    "TN - Memphis",
    "TN - Nashville", 
    "TX - Texas",
    "TX - Houston",
    "TX - San Antonio",
    "TX - Dallas", 
    "TX - Austin",
    "TX - Fort Worth",
    "TX - El Paso",
    "TX - Arlington",
    "UT - Utah", 
    "VA - Virginia",
    "VA - Virgina Beach",  
    "VT - Vermont", 
    "WA - Washington",
    "WA - Seattle", 
    "WI - Wisconsin",
    "WI - Milwaukee", 
    "WV - West Virginia", 
    "WY - Wyoming"]

    var cities = 
=======
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
            $(".main-container").empty();
            for(i = 0; i < events.length; i++){
                // RACHAEL INSERT FUNCTION HERE
                renderResults(events[i]);
                console.log(events[i])

            }

        });
    }



});





>>>>>>> 468632b6bce9b2bcfb9ee1574f7017dcbf7afa8e
