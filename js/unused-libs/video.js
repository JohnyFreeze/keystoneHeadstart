$(document).ready(function () {

    var id = 'kings-welcome-video'
    var video = document.getElementById(id)
    if (!video)
        return
    var myPlayer = videojs(id);

    console.log(myPlayer)

    myPlayer
        .on('ended', function (e, f) {
            console.log('video ended', e, f)
            $('#over-video').addClass('video-ended')

        }, false);

    myPlayer.on('play', function (e, f) {
        console.log('video started', e, f)
        $('#over-video').removeClass('video-ended')

    }, false);

    $('#welcome-btn').on('click', function (e) {
        e.preventDefault();
        $('#welcome').addClass('animated').addClass('slideOutUp')
        myPlayer.pause()
    })
}) 