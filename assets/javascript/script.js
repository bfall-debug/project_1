//======= loading webpages and event handlers ==========


$(document).ready(function(){
    // for navbar 
    $('.sidenav').sidenav();
    // for option picker
    $('select').formSelect();
  });

  var sel = $('.genre-dropdown');
  for(var i = 0; i < genres.length; i++) {
      var opt = $('<option>');
      opt.text(genres[i][0]);
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