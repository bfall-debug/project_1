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
      sel.append(opt);
  }

  var Sel = $('.size-dropdown');
  for(var i = 0; i < size.length; i++) {
      var opt = $('<option>');
      opt.text(size[i]);
      Sel.append(opt);
  }

  var Sel = $('.radius-dropdown');
  for(var i = 0; i < radius.length; i++) {
      var opt = $('<option>');
      opt.text(radius[i]);
      Sel.append(opt);
  }
