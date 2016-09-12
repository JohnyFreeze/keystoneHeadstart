/**
 * Created by Michal on 18. 3. 2016.
 */
//google maps

var el = $('#map');
var map;
var redMarker = '/images/index/icons/red-marker.png'
var yellowMarker = '/images/index/icons/yellow-marker.png'

function enableScrollingWithMouseWheel() {
    map.setOptions({scrollwheel: true});
}

function disableScrollingWithMouseWheel() {
    if (map) map.setOptions({scrollwheel: false});
}

function init() {
    map = new google.maps.Map(el[0], {
        center: new google.maps.LatLng(50.091018, 14.483485),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false // disableScrollingWithMouseWheel as default
    });

    //map = new google.maps.Map(document.getElementById('map'), {
    //    center: {lat: -34.397, lng: 150.644},
    //    zoom: 8
    //});

    // Create infoWindow
    //var infoWindow = new google.maps.InfoWindow({
    //    content: 'Sídlíme v xPORT akcelerátoru.<br> Jeseniova 2769/208            130 00  Praha 3'
    //});


    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(50.091018, 14.483485),
        map: map,
        icon: redMarker
    });
    var message1 = '<h3>Škola jedna</h3>' + 'Ulice 5 <br>' + 'Praha <br>' + 'Česká Republika <br>' + '100 00';
    attachSecretMessage(marker1, message1);

    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(50.092018, 14.483485),
        map: map,
        icon: yellowMarker
    });
    var message2 = '<h3>Škola dva</h3>' + 'Ulice 5 <br>' + 'Praha <br>' + 'Česká Republika <br>' + '100 00';
    attachSecretMessage(marker2, message2);

    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(50.091918, 14.487485),
        map: map,
        icon: redMarker
    });
    var message3 = '<h3>Škola tři</h3>' + 'Ulice 5 <br>' + 'Praha <br>' + 'Česká Republika <br>' + '100 00';
    attachSecretMessage(marker3, message3);

    function attachSecretMessage(marker, secretMessage) {
        var infowindow = new google.maps.InfoWindow({
            content: secretMessage
        });

        marker.addListener('click', function () {
            infowindow.open(marker.get('map'), marker);
        });
    }

    google.maps.event.addListener(map, 'mousedown', function () {
        enableScrollingWithMouseWheel()
    });


// This opens the infoWindow
    //infoWindow.open(map, marker);

}


if (typeof google != 'undefined')
    google.maps.event.addDomListener(window, 'load', init);


$('body').on('mousedown', function (event) {
    var clickedInsideMap = $(event.target).parents('#map').length > 0;
    if (!clickedInsideMap) {
        disableScrollingWithMouseWheel();
    }
});

$(window).scroll(function () {
    disableScrollingWithMouseWheel();
});
$(document).ready(function () {
    if (isMobile.matches) {
        disableScrollingWithMouseWheel();
    }
});

//init();
//