    function renderFavorites() {
        //  ========== Create Favorites Card Elements ============
        var $favDiv = $("<div>");
        $favDiv.addClass("col s12 m6");

        var $favCard = $("<div>");
        $favCard.addClass("card");

        var $favCardImgDiv = $("<div>");
        $favCardImgDiv.addClass("card-image");

        var $favCardImg = $("<img>");
        $favCardImg.attr("src", "assets/images/bandlights.jpg");
        // $favCardImg.addClass("cirlce");

        var $favCardSpan = $("<span>show name</span>");
        $favCardSpan.addClass("card-title");

        var $favCardContent = $("<div>content</div>");
        $favCardContent.addClass("card-content");

        var $favCardAction = $("<div>");
        $favCardAction.addClass("card-action");

        var $favCardLink = $("<a>tickets link</a>");
        $favCardLink.attr("href", "#");


        //  ========== Append Favorites Card Elements ============
        $favDiv.append($favCard);
        $favCard.append($favCardImgDiv);
        $favCardImgDiv.append($favCardImg);
        $favCard.append($favCardSpan);
        $favCard.append($favCardContent);
        $favCardContent.append($favCardAction);
        $favCardAction.append($favCardLink);
        $(".row-2").append($favDiv);
    }

    renderFavorites();