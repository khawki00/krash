/*========================
|  |    |  WORK |   |  |
*=======================*/
$(function(){
    $("#courses").magnificPopup({
        delegate: 'a',  //child items selecter, by clicking  on it popup will open
        type:'image',
        gallery:{
            enabled: true
        }
    });

});

/*=================
| |  | COURSES
=====================*/
$(function(){
    $("#available-courses").owlCarousel({
        items: 3, 
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            //breakpoint from 0 up
            0 : {
                items: 1
            },
            //breakpoint from 480 up
            480 : {
                items: 1
            },
            //breakpoint from 768 up
            768 : {
                items : 2
            },
            //breakpoint from 992 up
            992 : {
                items: 3
            }

        }
    });
});




/*============================
        NAVIGATION
============================*/
$(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() < 50) {
                //hide nav
                $("nav").removeClass("krash-top-nav");
        }else{
            //show nav
            $("nav").addClass("krash-top-nav");
        }
    });

});

//smooth scrolling
$(function(){
    $("a.smooth-scroll").click(function(event){
        // event.preventDefault();

        //get/return id like #about,#skills
        var section= $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

//close mobile menu on click
$(function(){
    $('.navbar-collapse ul li a').on('click touch', function(){
        $(".navbar-toggle").click();
    });
});