function initialize() {
    var mapCanvas = document.getElementById("map-canvas");
    var mapPosition = new google.maps.LatLng(46.9913104, 7.1441492);
    var mapOptions = {
        center: mapPosition,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapMarker = new google.maps.Marker({
        position: mapPosition
    });
    var map = new google.maps.Map(mapCanvas, mapOptions);
    mapMarker.setMap(map);
}

google.maps.event.addDomListener(window, "load", initialize);
