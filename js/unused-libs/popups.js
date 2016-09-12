// popups

$(document).ready(function () {

   // alert('popups')

    //$('#clothes #why-we .open-popup').on('click',function (e) {
    //    alert('popups')
    //});

    $('.open-popup').click(function (e) {
        //alert('open.popup');
        //if(!isMobile.matches) return


        var targetId = $(this).data('target');
        //var htmlContent = '<h2>Popup</h2>'
        console.log('id ' + targetId)
        var popup = $('#'+targetId);
        if (popup.length) {
            //$('#popup').html(htmlContent);
            $('#page').addClass('blurred');
            $('#popups').show();
            $('.popup')
                .removeClass('animated zoomOut')
                .hide();
            popup
                .show()
                .addClass('animated flipInX')
        }
        e.preventDefault();
    });

    $('#overlay').click(function (e) {
        console.log('overlay clicked')

        $('#page').removeClass('blurred');
        $('.popup')
            .removeClass('animated flipInX')
            .addClass('animated zoomOut');

        //console.log(isMobile.matches)
        if (isMobile.matches) {
            $('#popups').hide();
        } else {
            $('#popups').fadeOut();
        }

        e.preventDefault();
    });

    $(document).on("click", ".close-marker", function (e) {
        console.log('closing X marker')
        $('#page').removeClass('blurred');
        $('.popup')
            .removeClass('flipInX')
            .addClass('zoomOut');

        console.log(isMobile.matches)
        if (isMobile.matches) {
            $('#popups').hide();
            $('#vote-popups').hide();
        } else {
            $('#popups').fadeOut();
            $('#vote-popups').fadeOut();
        }

        e.preventDefault();
    });
});