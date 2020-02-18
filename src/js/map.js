import L from 'leaflet';

const node = document.querySelector('._map');

if (node) {
  window.addEventListener('load', () => {
    const map = L.map(node).setView([ 46.9902244, 7.1445924 ], 14);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 24,
      id: 'mapbox.streets',
      detectRetina: true,
      attribution: 'Kartendaten © <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>; Bilder © <a href="https://www.mapbox.com/">Mapbox</a>',
      accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    }).addTo(map);

    L.marker([ 46.9902244, 7.1445924 ]).addTo(map);
  });
}
