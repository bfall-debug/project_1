function createMainPage(){
    var body = $("body");

    for(i=1; i<1000;i++){
        var concerts = concertElement("Green Day");
        body.append(concerts);
    }
    
}