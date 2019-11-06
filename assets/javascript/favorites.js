var savedEvents = JSON.parse(localStorage.getItem("favoritesArray"));
console.log(savedEvents)
alert($.isArray(savedEvents))
// ["rZ7HnEZ1AaqdfA", "Z7r9jZ1Aerf-7"];

savedEvents.forEach(function(savedEvent){
    ticketmasterEvent(savedEvent);
});


function ticketmasterEvent(Id) {
    var eventId = `&Id=${Id}`
    var url = TmQuery + `${eventId}`

    $.ajax({
        url: url,
        method: "GET",
    }).then(function (a) {
        a = a._embedded.events[0];
        console.log(a)
        eventInfo = {
            name: a.name,
            image: a.images[0].url,
            ticket: a.url,
            venue: a._embedded.venues[0].name,
            date: a.dates.start.localDate
        }
        // code or function to add response to page
        renderFavorites(eventInfo);
    });
}


function renderFavorites(event) {
    //  ========== Create Favorites Card Elements ============
    var $favDiv = $("<div>");
    $favDiv.addClass("col s12 m6");

    var $favCard = $("<div>");
    $favCard.addClass("card");

    var $favCardImgDiv = $("<div>");
    $favCardImgDiv.addClass("card-image");

    var $favCardImg = $("<img>");
    $favCardImg.attr("src", "#");

    var $favCardSpan = $("<span>");
    $favCardSpan.addClass("card-title");
    $favCardSpan.text(event.name);

    var $favCardContent = $("<div>");
    $favCardContent.addClass("card-content");

    var $favCardAction = $("<div>");
    $favCardAction.addClass("card-action");

    var $favCardLink = $("<a>");
    $favCardLink.attr("href", event.ticket);
    $favCardLink.text("Buy Tickets Here!")


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
        $favCardAction.append($favCardLink);
        $(".row-2").append($favDiv);
    // }
    
    
}

