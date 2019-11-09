
//======================= This is a token that expires every hour to get it to work again click the link below ===============
// from the side click the green "Get your web playback sdk access token and paste that in the token variable below"
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


let _token = 'BQDOn6iGKcR4wNWONSW6iJhxX7LwV_GP69lvyhmYpBozqQG2luENccrMznz2UEp55hqXaqPbnz-0_9YXRQLgTdltdyZUWtvXxGL0G5KfHn22EM11ixVlQ8-UAped7A7wbAIqCHip2ppq166uunuqfV58I1R4-wi4AkKKYc8';

window.onSpotifyPlayerAPIReady = () => {
    const player = new Spotify.Player({
        name: 'Web Playback SDK Template',
        getOAuthToken: cb => { cb(_token); }
    });

    player.on('ready', data => {
               $(document).on("click", ".eventImage", function(){
            var artistName = $(this).attr("data-name")
            var state = $(this).attr("music-state")
            if (state == "pause"){
                var newState = "play"
                $(this).attr("music-state",newState)
                playTrack(data.device_id, artistName, newState,$(this))
            }
            else{
                var newState = "pause"
                $(this).attr("music-state",newState)
                playTrack(data.device_id, artistName, newState,$(this))
            }
            
        })
    });

    player.connect();
}

function playTrack (device_id, artist, state,that) {
    var selectedImage = that
    $.ajax({
        url: `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
        type: "GET",
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); }
    }).then(function (a) {
        artistId = a.artists.items[0].id
        $.ajax({
            url: `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`,
            type: "GET",
            contentType: 'application/json',
            beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); }
        }).then(function(b){
            trackId = b.tracks[0].id
            trackName = b.tracks[0].name
            selectedImage.attr("duration",b.tracks[0].duration_ms)
            $.ajax({
                url: `https://api.spotify.com/v1/me/player/${state}?device_id=` + device_id,
                type: "PUT",
                data: `{"uris": ["spotify:track:${trackId}"]}`,
                beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + _token); }
            });
        })
    })
}