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
