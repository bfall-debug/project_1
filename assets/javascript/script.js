//======= loading webpages and event handlers ==========
// var mainImage = $("#main-image");

$(document).ready(function () {
  var mainImage = $("#main-image");
  
  
  
  
  savedGenre = JSON.parse(localStorage.getItem("genre-dropdown"));
  savedRadius = JSON.parse(localStorage.getItem("radius-dropdown"));
  savedSize = JSON.parse(localStorage.getItem("size-dropdown"));

 $("#genre-dropdown").val(savedGenre)
 $("#radius-dropdown").val(savedRadius)
 $("#size-dropdown").val(savedSize)



  $('.sidenav').sidenav();
  $('select').formSelect();
  mainImage.delay(2500).animate({ height: "275px", width: "100%", overflow: "hidden" }, 3000)


});


var genreDropDown = $('#genre-dropdown');
  for (var i = 0; i < genres.length; i++) {
    var opt = $('<option>');
    opt.text(genres[i][0]);
    genreDropDown.append(opt);
  }

  var sizeDropDown = $('#size-dropdown');
  for (var i = 0; i < size.length; i++) {
    var opt = $('<option>');
    opt.text(size[i]);
    sizeDropDown.append(opt);
  }

  var radiusDropDown = $('#radius-dropdown');
  for (var i = 0; i < radius.length; i++) {
    var opt = $('<option>');
    opt.text(radius[i]);
    radiusDropDown.append(opt);
  }


$(document).on("change",".dropdown",function(selectedOption){
// $(".dropdown").change(function (selectedOption) {
  var targetId = selectedOption.target.id;
  var targetValue = selectedOption.target.value;
  localStorage.setItem(targetId, JSON.stringify(targetValue))
})