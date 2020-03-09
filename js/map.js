var map;

DG.then(function () {
    map = DG.map('map', {
        center: [55.566633, 42.05633],
        zoom: 17
    });
    DG.marker([55.566633, 42.05633]).addTo(map).bindPopup('Hairdresser');
});
