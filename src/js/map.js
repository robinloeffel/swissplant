if ('google' in window) {
    const initialize = () => {
        let mapCanvas = document.getElementById('map-canvas'),

            mapPosition = new google.maps.LatLng(46.9913104, 7.1441492),

            mapOptions = {
                center: mapPosition,
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },

            mapMarker = new google.maps.Marker({
                position: mapPosition
            }),

            map = new google.maps.Map(mapCanvas, mapOptions);

        mapMarker.setMap(map);
    };

    google.maps.event.addDomListener(window, 'load', initialize);
}
