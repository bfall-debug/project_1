// create an object to save the info about each show
var showInfo = {
    bandName: "band name",
    image: "image",
    showDate: "show date",
    venue: "venue",
    tickets: "tickets"
}


function renderResults(event) {
    // clear the page content and keep the navbar
    // $(".main-container").empty();

    // ========= Construction =========
    // Create all elements of the the avatar content for the results page

    var $resultsUl = $("<ul>");
    $resultsUl.addClass("collection");

    var $newDivRow = $("<div>");
    $newDivRow.addClass("row");

    var $resultsLi = $("<li>");
    $resultsLi.addClass("valign-wrapper");
    $resultsLi.addClass("collection-item");
    $resultsLi.addClass("avatar");

    var $resultsBandImage = $("<img>");
    $resultsBandImage.addClass("circle");
    $resultsBandImage.addClass("cover");
    $resultsBandImage.attr("src", event.images[0].url);

    var $resultsDiv = $("<div>");
    $resultsDiv.addClass("col s10");

    var $bandName = $("<p>").text(event.name);
    var $dateP = $("<p>").text(event.dates.start.localDate);
    var $venueP = $("<p>").text(event._embedded.venues[0].name);

    var $resultsAnchor = $("<a>");
    $resultsAnchor.addClass("secondary-content");
    $resultsAnchor.attr("href", "#!");

    var $starIcon = $("<i>grade</i>");
    $starIcon.addClass("starIcon");
    $starIcon.addClass("pointer-hover");
    $starIcon.addClass("col s1");
    $starIcon.addClass("material-icons");
    $starIcon.addClass("right");
    $starIcon.addClass("icon-teal");


    // Append elements
    $resultsUl.append($newDivRow);
    $newDivRow.append($resultsLi);
    $resultsLi.append($resultsBandImage);
    $resultsLi.append($resultsDiv);
    $resultsDiv.append($bandName);
    $resultsDiv.append($dateP);
    $resultsDiv.append($venueP);
    $resultsLi.append($resultsAnchor);
    $resultsLi.append($starIcon);
    $(".main-container").append($resultsUl);


    // set showInfo variables to be saved in local storage
    bandName = event.name;
    image = event.images[0].url;
    showDate = event.dates.start.localDate;
    venue = event._embedded.venues[0].name;
    tickets = event.outlets[0].url;


    //========= Return Completed Element ============
    return $resultsUl;
}


// Click event for the star icon to save show info
$(document).on("click", ".starIcon", function (event) {
    if ($(this).hasClass("icon-teal")){
    $(this).removeClass("icon-teal");
    $(this).addClass("icon-saved");
    localStorage.setItem("showInfo", JSON.stringify(showInfo));
    } else {
        $(this).addClass("icon-teal");
        $(this).removeClass("icon-saved");
        localStorage.removeItem("showInfo");
    }
});


// ========= Create Favorites Page =========

function renderFavorites(){

}



