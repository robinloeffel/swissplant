const mapContainer = document.querySelector('._map');

if (mapContainer) {
  import(
    /* webpackChunkName: 'leaflet' */
    'leaflet'
  ).then(({
    default: Leaflet
  }) => {
    const leafletMap = Leaflet.map(mapContainer);
    leafletMap.setView([ 46.9902244, 7.1445924 ], 14);

    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Kartendaten © <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>; Bilder © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      detectRetina: true,
      accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    }).addTo(leafletMap);

    Leaflet.marker([ 46.9902244, 7.1445924 ]).addTo(leafletMap);
  });
}
