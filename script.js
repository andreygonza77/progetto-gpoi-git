const map = L.map('map').setView([41.9028, 12.4964], 13);
L.tileLayer('https://openstreetmap.org{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
L.marker([41.9028, 12.4964]).addTo(map)
    .bindPopup('Roma Centro')
    .openPopup();