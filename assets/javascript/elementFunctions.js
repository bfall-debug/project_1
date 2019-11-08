
function renderResults(event, index) {
    // ========= Construction =========
    // Create all elements of the the avatar content for the results page

    var $resultsUl = $("<ul>");
    $resultsUl.addClass("collection");

    var $newDivRow = $("<div>");
    $newDivRow.addClass("row eventRow");

    var $resultsLi = $("<li>");
    $resultsLi.addClass("valign-wrapper");
    $resultsLi.addClass("collection-item");
    $resultsLi.addClass("avatar");
    $resultsLi.addClass("eventContainer");

    var $resultsBandImage = $("<img>");
    // $resultsBandImage.addClass("circle");
    $resultsBandImage.addClass("cover");
    $resultsBandImage.addClass("eventImage")
    $resultsBandImage.attr("src", event.images[0].url);
    $resultsBandImage.attr("data-name",event._embedded.attractions[0].name)
    $resultsBandImage.attr("music-state","pause");

    var $resultsDiv = $("<div>");
    $resultsDiv.addClass("col s10");

    var $bandName = $("<p>").text(event.name);
    $bandName.addClass("eventName")
    var $dateP = $("<p>").text(event.dates.start.localDate);
    $dateP.addClass("center-align");
    var $venueP = $("<p>").text(event._embedded.venues[0].name);
    $venueP.addClass("center-align");

    var $resultsAnchor = $("<a>");
    $resultsAnchor.addClass("secondary-content");
    $resultsAnchor.attr("href", "#!");

    star = createStar(event.id);


    // Append elements
    $resultsUl.append($newDivRow);
    $newDivRow.append($resultsLi);
    $resultsLi.append($resultsBandImage);
    $resultsLi.append($resultsDiv);
    $resultsDiv.append($bandName);
    $resultsDiv.append($dateP);
    $resultsDiv.append($venueP);
    $resultsLi.append($resultsAnchor);
    $resultsLi.append(star);
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
    var savedEvents = JSON.parse(localStorage.getItem("favoritesArray"));
    var objectOfEvents = JSON.parse(localStorage.getItem("objectOfEvents"));
    // console.log(objectOfEvents)
    if(objectOfEvents === null){
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
            console.log(objectOfEvents)
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

        // console.log(eventInfo)
    });

    
}

function createStar(id){

    var star = $("<i>grade</i>");
    star.addClass("starIcon");
    star.addClass("pointer-hover");
    star.addClass("col s1");
    star.addClass("material-icons");
    star.addClass("right");

    star.attr("data-id", id)

    var savedEvents = JSON.parse(localStorage.getItem("favoritesArray"));

    var savedEvents = JSON.parse(localStorage.getItem("favoritesArray"));
    if (savedEvents === null){
        savedEvents = [];
    }

    var index = savedEvents.indexOf(id);
        if(index > -1){
            star.addClass("icon-saved");
        }
        else{
            star.addClass("icon-teal");
        }

    return star;
}




function createStar(id){
    
    var star = $("<i>grade</i>");
    star.addClass("starIcon");
    star.addClass("pointer-hover");
    star.addClass("col s1");
    star.addClass("material-icons");
    star.addClass("right");

    star.attr("data-id", id)

    var savedEvents = JSON.parse(localStorage.getItem("favoritesArray"));
    if (savedEvents === null){
        savedEvents = [];
    }

    var index = savedEvents.indexOf(id);
        if(index > -1){
            star.addClass("icon-saved");
        }
        else{
            star.addClass("icon-teal");
        }

    return star
}