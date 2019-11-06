
function renderResults(event, index) {
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

    
    
    $starIcon.attr("data-id", event.id)

    var savedEvents = JSON.parse(localStorage.getItem("favoritesArray"));
    if (savedEvents === null){
        savedEvents = [];
    }

    var index = savedEvents.indexOf(event.id);
        if(index > -1){
            $starIcon.addClass("icon-saved");
        }
        else{
            $starIcon.addClass("icon-teal");
        }


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

    
    var savedEvents = JSON.parse(localStorage.getItem("favoritesArray"));
    var objectOfEvents = JSON.parse(localStorage.getItem("objectOfEvents"))
    var eventId = $(this).attr("data-id");

    if (objectOfEvents === null){
        objectOfEvents = [];
        savedEvents = [];
    }


    if ($(this).hasClass("icon-teal")){

        $(this).removeClass("icon-teal");
        $(this).addClass("icon-saved");
        
        savedEvents.push(eventId);
        ticketmasterEvent(eventId);

    } 
    else {
        $(this).addClass("icon-teal");
        $(this).removeClass("icon-saved");

        var index = savedEvents.indexOf(eventId);
        if(index > -1) {
            savedEvents.splice(index, 1)
            objectOfEvents.splice(index, 1)
        }

    }

    localStorage.setItem("favoritesArray", JSON.stringify(savedEvents));
    localStorage.setItem("objectOfEvents", JSON.stringify(objectOfEvents));

});



function ticketmasterEvent(Id) {
    var eventId = `&Id=${Id}`
    var url = TmQuery + `${eventId}`
    var objectOfEvents = JSON.parse(localStorage.getItem("objectOfEvents"))

    if(objectOfEvents == null){
        objectOfEvents = [];
    }

    $.ajax({
        url: url,
        method: "GET",
    }).then(function (a) {
        a = a._embedded.events[0];
        eventInfo = {
            name: a.name,
            image: a.images[0].url,
            ticket: a.url,
            venue: a._embedded.venues[0].name,
            date: a.dates.start.localDate,
            id: Id
        }
        objectOfEvents.push(eventInfo);
        localStorage.setItem("objectOfEvents",JSON.stringify(objectOfEvents))

        console.log(eventInfo)
    });
}




