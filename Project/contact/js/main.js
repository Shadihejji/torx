$(function () {
    var mymap = L.map('map').setView([40.716881, -73.994019], 15);
    // Install Layer 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    // Marker 
    L.circleMarker([40.716881, -73.994019], 
        {radius: 15}).addTo(mymap);
    
    L.marker([40.716881, -73.994019]).addTo(mymap);
});
