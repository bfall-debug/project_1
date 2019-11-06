
function renderResults(event, index) {
    // ========= Construction =========
    // Create all elements of the the avatar content for the results page

    var $resultsUl = $("<ul>");
    $resultsUl.addClass("collection");
    $resultsUl.attr("data-id",event.id);

    var $newDivRow = $("<div>");
    $newDivRow.addClass("row");

    var $resultsLi = $("<li>");
    $resultsLi.addClass("valign-wrapper");
    $resultsLi.addClass("collection-item");
    $resultsLi.addClass("avatar");

    var $resultsBandImage = $("<img>");
    // $resultsBandImage.addClass("circle");
    $resultsBandImage.addClass("cover");
    $resultsBandImage.addClass("eventImage")
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
    $starIcon.attr("data-id",event.id)


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

// I want to save the showInfo for events[i]..
var savedEvents = [];

// Click event for the star icon to save show info
$(document).on("click", ".starIcon", function (event) {
    event.preventDefault();
    var eventId = $(this).attr("data-id");


    if ($(this).hasClass("icon-teal")){
        $(this).removeClass("icon-teal");
        $(this).addClass("icon-saved");
        
        
        localStorage.setItem("data-id", eventId);

        var savedEvent = localStorage.getItem("data-id");
        savedEvents.push(savedEvent);
        localStorage.setItem("favoritesArray", JSON.stringify(savedEvents));

        console.log(savedEvents);

    } else {
        $(this).addClass("icon-teal");
        $(this).removeClass("icon-saved");
        // localStorage.removeItem("data-id");
        var index = savedEvents.indexOf(eventId);
        if(index > -1) {
            savedEvents.splice(index, 1)
        }
        console.log("index", index);
        console.log("savedEvent", eventId);
        console.log(savedEvents);
        localStorage.setItem("favoritesArray", JSON.stringify(savedEvents));
    }
});








