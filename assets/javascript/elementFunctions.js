function renderResults(artist){
    // clear the page content and keep the navbar
    $(".main-container").empty();

    // ========= Construction =========
    // Create all elements of the the avatar content for the results page
    var $resultsUl = $("<ul>");
    $resultsUl.addClass("collection");

    var $resultsLi = $("<li>");
    $resultsLi.addClass("collection-item");
    $resultsLi.addClass("avatar");


    var $resultsBandImage = $("<img>");
    $resultsBandImage.addClass("circle");
    $resultsBandImage.attr("src", "bandlights.jpg");

    var $resultsSpan = $("<span>");
    $resultsSpan.addClass("title");
    $resultsSpan.text("Band Name");

    var $dateP = $("<p>");
    var $venueP = $("<p>");

    var $resultsAnchor = $("<a>");
    $resultsAnchor.addClass("secondary-content");
    $resultsAnchor.attr("href", "#!");

    var $starIcon = $("<i>");
    $starIcon.addClass("material-icons");


    $resultsUl.append($resultsLi);
    $resultsLi.append($resultsBandImage);
    $resultsLi.append($resultsSpan);
    $resultsLi.append($dateP);
    $resultsLi.append($venueP);
    $resultsLi.append($resultsAnchor);
    $resultsLi.append($starIcon);
    $(".main-container").append($resultsUl);


    //========= Return Completed Element ============
    return $resultsUl;
    
}