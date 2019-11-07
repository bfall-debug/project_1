
//======================= This is a token that expires every hour to get it to work again click the link below ===============
// from the side click the green "Get your web playback sdk access token and paste that in the token variable below"
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


let _token = 'BQBjmhc-80UwKfw1w837tU1-ep1D2hZ7jj5Mg8bJO5hMp1ytEf55taptcawzktwIgVb__52R7HyBNs9v-ylWWVO4LGmwOkSRn6RtK2Jb3axxVHEuJXpRDq54JPpwi-LiWpsU99kOCieylY1jsp27bCTxwkFlI6Yl0G7WXqw';













// // Get the hash of the url
// const hash = window.location.hash
// .substring(1)
// .split('&')
// .reduce(function (initial, item) {
//   if (item) {
//     var parts = item.split('=');
//     initial[parts[0]] = decodeURIComponent(parts[1]);
//   }
//   return initial;
// }, {});
// window.location.hash = '';

// // Set token
// let _token = hash.access_token;

// const authEndpoint = 'https://accounts.spotify.com/authorize';

// // Replace with your app's client ID, redirect URI and desired scopes
// const clientId = '56ca4dabe50e40bcbee47d90cc26ec02';
// const redirectUri = '<<< insert redirect URI here >>>>';
// const scopes = [
//   'streaming',
//   'user-read-birthdate',
//   'user-read-private',
//   'user-modify-playback-state'
// ];

// // If there is no token, redirect to Spotify authorization
// if (!_token) {
//   window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
// }

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
