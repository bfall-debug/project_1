//======= loading webpages and event handlers ==========


$(document).ready(function(){
    // for navbar 
    $('.sidenav').sidenav();
    // for option picker
    $('select').formSelect();

    // RANDOM BTN TO TEST RESULTS PAGE
    $(".randomBtn").on("click", function(){
      // alert("clicked");
      renderResults();
    });
  });
