
    $(".burger").click(function () {
        $(".menuOverlay").fadeToggle();
    });
    $("#menuClose").click(function () {
        $(".menuOverlay").fadeOut();
    })
    function menuClose() {
        $(".menuOverlay").fadeOut();
    };
    $(function () {

        $('#menu_item01').click(function () {
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false;
            });
        $('#menu_item02').click(function () {
            $('html,body').animate({ scrollTop: $('#project').offset().top }, 800);

        });
        $('#menu_item03').click(function () {
            $('html,body').animate({ scrollTop: $('#experience').offset().top }, 800);

        });

        $('#menu_item04').click(function () {
            $('html,body').animate({ scrollTop: $('#contact').offset().top }, 800);

        });
        $('#mb_menu_item01').click(function () {
            $('html,body').animate({ scrollTop:0 }, 800);
            $(".menuOverlay").fadeOut();
        });
        $('#mb_menu_item02').click(function () {
            $('html,body').animate({ scrollTop: $('#project').offset().top }, 800);
            $(".menuOverlay").fadeOut();
        });

        $('#mb_menu_item03').click(function () {
            $('html,body').animate({ scrollTop: $('#experience').offset().top }, 800);
            $(".menuOverlay").fadeOut();
        });
        $('#mb_menu_item04').click(function () {
            $('html,body').animate({ scrollTop: $('#contact').offset().top }, 800);
            $(".menuOverlay").fadeOut();
        });
    });

