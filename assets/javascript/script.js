//======= loading webpages and event handlers ==========
// var mainImage = $("#main-image");

$(document).ready(function(){
  var mainImage = $("#main-image");
    // for navbar 
    $('.sidenav').sidenav();
    // for option picker
    $('select').formSelect();
    mainImage.delay( 1000 ).animate({height: "210px", width: "100%", overflow: "hidden"}, 3000)
    // mainImage.css('animation-duration', '.2s');
  });

  var sel = $('.genre-dropdown');
  for(var i = 0; i < genres.length; i++) {
      var opt = $('<option>');
      opt.text(genres[i][0]);
      // console.log(opt.child())
      sel.append(opt);
  }

  var citySel = $('.location-dropdown');
  for(var i = 0; i < stateCities.length; i++) {
      var opti = $('<option>');
      opti.text(stateCities[i]);
      citySel.append(opti);
  }

  $("#testButton").on("click", function(){
    genre = getGenre();
  });