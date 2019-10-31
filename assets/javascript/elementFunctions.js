function concertElement(artist){
    // clear the page content and keep the navbar
    $(".main-container").empty();

    // ========= Construction =========
    var container = $("<div>");
    var image = $("<img>");
    var bandLink = $("<div>");
    var description = $("<div>");

    container.append(image,bandLink,description);

    //=========== Data Fill =============
    image.attr("src","image-link-here");
    bandLink.text("https://www.bandInfo.com");
    description.text("band is super cool");

    //=========== Styling ================
    info = getLocation();
    image.addclass("image styling class");
    bandLink.addclass("band link styling class");
    description.addclass("description styling class");

    //========= Return Completed Element ============
    return container;
    
}