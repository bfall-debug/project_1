var savedEvents = JSON.parse(localStorage.getItem("favoritesArray"));
console.log("saved events: ", savedEvents)


// loop through the saved object to populate the cards
var objectOfEvents = JSON.parse(localStorage.getItem("objectOfEvents"));

for (var k = 0; k < objectOfEvents.length; k++){
    renderFavorites(objectOfEvents[k]);
}




function renderFavorites(event) {
    //  ========== Create Favorites Card Elements ============
    var $favDiv = $("<div>");
    $favDiv.addClass("col s12 m2");

    var $favCard = $("<div>");
    $favCard.addClass("card");

    var $favCardImgDiv = $("<div>");
    $favCardImgDiv.addClass("card-image");

    var $favCardImg = $("<img>");
    $favCardImg.attr("src", event.image);

    var $favCardSpan = $("<span>");
    $favCardSpan.addClass("card-title");
    $favCardSpan.addClass("")
    $favCardSpan.text(event.name);

    star = createStar(event.id);

    var $favCardContent = $("<div>");
    $favCardContent.addClass("card-content");

    var $favCardAction = $("<div>");
    $favCardAction.addClass("card-action");

    var $favCardLink = $("<a>");
    $favCardLink.addClass("card-link");
    $favCardLink.attr("href", event.ticket);
    $favCardLink.text("Buy Tickets Here!");


    //  ========== Append Favorites Card Elements ============
    var favoritesString = localStorage.getItem("favoritesArray");
    console.log("favoriteString", favoritesString);

    var favsArray = JSON.parse(favoritesString);

    console.log(favsArray);

    // if (savedEvents.length > 0) {
        $favDiv.append($favCard);
        $favCard.append($favCardImgDiv);
        $favCardImgDiv.append($favCardImg);
        $favCard.append($favCardSpan);
        $favCard.append($favCardContent);
        $favCardContent.append($favCardAction);
        $favCardContent.append(star);
        $favCardAction.append($favCardLink);
        $(".row-2").append($favDiv);
    // }
    
}

$(document).on("click", ".starIcon", function(){
    $(this).parents().eq(2).remove();

});

