/**
 * Created by Michal on 29. 3. 2016.
 */

$(document).ready(function () {

    $('.box').hover(function () {
        var id = $(this).data('target');

        $('.hover-content').hide();
        $('#'+id).show();

        $('.box').removeClass('active');
        $(this).addClass('active');

    });

});