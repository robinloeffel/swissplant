if ('google' in window) {
    const initialize = () => {
        const canvas = document.getElementById('google-maps');
        const position = new google.maps.LatLng(46.9913104, 7.1441492);
        const options = {
            center: position,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        const marker = new google.maps.Marker({
            position: position
        });
        const map = new google.maps.Map(canvas, options);

        marker.setMap(map);
    };

    window.addEventListener('load', () => {
        initialize();
    });
}
