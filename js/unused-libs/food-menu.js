$(document).ready(function () {
// owl
    var owl = $("#menu-owl");
    owl.owlCarousel({
        items: 3,
        itemsDesktop: [1000, 3],
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        //autoHeight: true,
        itemsScaleUp: false,
        autoPlay: 8000,
        stopOnHover: true

    });

    $(".owl-next").click(function () {
        owl.trigger('owl.next');
    });

    $(".owl-prev").click(function () {
        owl.trigger('owl.prev');
    });


//nav
    var links = $('#menu-section .categories ul li a')
    links.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        //navbar
        links.removeClass('active');
        $(this).addClass('active');

        var classes = this.className.split(/\s+/);
        var category = classes[0].substr(5);
        var el = $('#' + category);
        if (el.length) {
            //animation
            var currItem = (owl.data('owlCarousel').currentItem);
            console.log(currItem)
            var delay = 0;
            $(".owl-item").slice(currItem).each(function () {
                $(this).addClass('animated zoomOut').css("animation-delay", delay + 's');
                delay += 0.2;
            });
            //data
            setTimeout(function () {
                loadNewData(category);
            }, 1000);
        }
    });


    // load data function
    var loadNewData = function (category) {

        //hide navigation
        $('.owl-prev, .owl-next').hide();

        if (typeof owl.data('owlCarousel') === 'undefined') return;


        //delete old items data
        while (typeof owl.data('owlCarousel').removeItem() === 'undefined') {
        }

        var delay = 0;
        //add new based on html
        var items = $('#' + category + ' .item');
        if (items.length > 3) {
            $('.owl-prev, .owl-next').show();
        }
        items.each(function () {
            var item = $('<div></div>')
                .html($(this).html())
                .addClass('item  animated bounceIn')
                .css("animation-delay", delay + 's');
            owl.data('owlCarousel').addItem(item);
            delay += 0.5;
        });


    };

    //load drinks data (initial)
    loadNewData('drink-list');

});