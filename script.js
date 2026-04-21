const map = L.map('map').setView([41.9028, 12.4964], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

document.getElementById("btnStats").addEventListener("click", function () {

    const container = document.getElementById("tabella-container");

   
    container.innerHTML = "";

    const monumenti = ottieniListaMonumenti();

    const table = document.createElement("table");

    monumenti.forEach((m, index) => {
        const row = document.createElement("tr");

        const colIndex = document.createElement("td");
        colIndex.textContent = index + 1;

        const colLat = document.createElement("td");
        colLat.textContent = m.lat;

        const colLng = document.createElement("td");
        colLng.textContent = m.lng;

        row.appendChild(colIndex);
        row.appendChild(colLat);
        row.appendChild(colLng);

        table.appendChild(row);
    });

    container.appendChild(table);
});