// create an object to save the info about each show
var showInfo = {
    bandName: "Band Name",
    showDate: "Show Date",
    venue: "Venue"
}

function renderResults(artist) {
    // clear the page content and keep the navbar
    $(".main-container").empty();

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
    $resultsBandImage.attr("src", "bandlights.jpg");

    var $resultsDiv = $("<div>");
    $resultsDiv.addClass("col s10");

    var $bandName = $("<p>").text(showInfo.bandName);
    var $dateP = $("<p>").text(showInfo.showDate);
    var $venueP = $("<p>").text(showInfo.venue);

    var $resultsAnchor = $("<a>");
    $resultsAnchor.addClass("secondary-content");
    $resultsAnchor.attr("href", "#!");

    var $starIcon = $("<i>grade</i>");
    $starIcon.addClass("starIcon");
    $starIcon.addClass("col s1");
    $starIcon.addClass("material-icons");
    $starIcon.addClass("right");
    $starIcon.addClass("icon-teal");


    // append elements
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
    $(this).removeClass("icon-teal");
    $(this).addClass("icon-saved");

    localStorage.setItem("showInfo", JSON.stringify(showInfo));

});



