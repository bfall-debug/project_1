//======= loading webpages and event handlers ==========


$(document).ready(function(){
    // for navbar 
    $('.sidenav').sidenav();
    // for option picker
    $('select').formSelect();

    UserLocation = getLocation();
    console.log(UserLocation)
  });

  