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

    var $bandName = $("<p>").text("Band Name");
    var $dateP = $("<p>").text("Show Date");
    var $venueP = $("<p>").text("Venue Info");

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



$(document).on("click", ".starIcon", function (event) {
    alert("clicked");
    $(this).removeClass("icon-teal");
    $(this).addClass("icon-saved");
});



