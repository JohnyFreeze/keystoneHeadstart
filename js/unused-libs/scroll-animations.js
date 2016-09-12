$(document).ready(function () {



// scrolling animations
    window.addEventListener("scroll", (function () {

        if (!isMobile.matches) {
            var top = document.body.scrollTop || document.documentElement.scrollTop
            if (top > 600) {
                $("#navbar")
                    .addClass('fixed')
                    .removeClass('animated fadeOutUp')
                    .addClass('animated fadeInDown');

            } else if (top > 150) {
                $("#navbar")
                    .removeClass('animated fadeInDown')
                    .addClass('animated fadeOutUp');

            } else {
                $("#navbar")
                    .removeClass('fixed')
                    .removeClass('animated fadeInDown')
                    .removeClass('animated fadeOutUp');
            }
        }
    }));


//Waypoints Animations
//
//    $('.brown-stroke').waypoint(function () {
//        $(this).addClass('animated zoomIn');
//    }, {offset: '100%'});


    $('.brown-bubble').waypoint(function () {
        $(this).addClass('animated bounceInLeft');

    }, {offset: '80%'});



    $('.yellow-bubble').waypoint(function () {
        $(this).addClass('animated bounceInRight');

    }, {offset: '80%'});


    $('#gallery-section .grid-item').waypoint(function () {
        $(this).addClass('animated slideInUp');

    }, {offset: '70%'});


//    $('#works .col-sm-3').waypoint(function () {
//        $(this).addClass('animated fadeInDown');
//    }, {offset: '100%'});
//
//    $('#features .col-sm-4').waypoint(function () {
//        $(this).addClass('animated zoomIn');
//    }, {offset: '100%'});
//
//
//    //$('#services .col-sm-4, .col-sm-5 ').waypoint(function () {
//    //    $(this).addClass('animated fadeInUp');
//    //}, { offset: '100%' });
//    //
//    $('#references .col-sm-4').waypoint(function () {
//        $(this).children('.testimonial').addClass('animated zoomInUp');
//
//    }, {offset: '100%'});
//    $('#references .col-sm-4 .member-holder').waypoint(function () {
//        $(this).addClass('animated zoomIn');
//    }, {offset: '100%'});
//
//
//    $('#team .col-sm-4').waypoint(function () {
//        $(this).addClass('animated zoomIn');
//    }, {offset: '100%'});


//$('#pride .logo-holder').waypoint(function () {
//    $(this).addClass('animated zoomIn');
//}, { offset: '100%' });


});