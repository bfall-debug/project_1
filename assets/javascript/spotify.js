
//======================= This is a token that expires every hour to get it to work again click the link below ===============
// from the side click the green "Get your web playback sdk access token and paste that in the token variable below"
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


let _token = 'BQBOjSY3IXLJvBkQjQFnl2QuiyfAYzWC_Exm4AR21l2S690-h1hyl9eyfZDNFW8u1GhBokDVX7nqP3N-O7vXZae7W4EJsFlJO_EmqcIeyo5X_JxmSI78DlK3r-S22SYq4X9aVE_tLgJKsA5bWncheTZAIhQqPDsckrPkoGo';

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