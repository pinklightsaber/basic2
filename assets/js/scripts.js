
    $(window).on('scroll', function () {
        var windowHeight = $(window).height(),
            gridTop = windowHeight * .01,
            gridBottom = windowHeight * 1.1;
        $('body section div').each(function () {
            var thisTop = $(this).offset().top - $(window).scrollTop();

            if (thisTop > gridTop && (thisTop + $(this).height()) < gridBottom) {
                $(this).addClass("change");
            } else {
                $(this).removeClass("change");
            }
        });

        var $nav = $(".nav-wrapper");
        var $sec = $("section");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $sec.height());
 

    });
    $(window).trigger('scroll');


 
    var masonry = new Macy({
        container: '#macy-container',
        trueOrder: false,
        waitForImages: false,
        useOwnImageLoader: false,
        debug: true,
        mobileFirst: true,
        columns: 1,
        margin: {
            y: 16,
            x: '2%',
        },
        breakAt: {
            1200: 4,
            940: 3,
            520: 2,
            400: 1
        },
    });
