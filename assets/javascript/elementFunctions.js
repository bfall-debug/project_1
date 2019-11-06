// create an object to save the info about each show
var showInfo = {
    bandName: "Band Name",
    showDate: "Show Date",
    venue: "Venue"
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
    $resultsBandImage.attr("src", "assets/images/bandlights.jpg");

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



