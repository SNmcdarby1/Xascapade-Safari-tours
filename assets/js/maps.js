function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        mapTypeId: "terrain",
        center: {
            lat: -1.3764,
            lng: 36.7443
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{
            lat: -1.286389,
            lng: 36.817223
        },
        {
            lat: 1.3731,
            lng: 36.8523
        },
        {
            lat: 1.3719,
            lng: 34.9381
        },
        {
            lat: 2.2495,
            lng: 38.3377
        },
        {
            lat: 2.9633,
            lng: 38.1440
        },
        {
            lat: 2.6527,
            lng: 37.2606
        },
        {
            lat: 0.3634,
            lng: 36.0866
        },
        {
            lat: 0.2550,
            lng: 36.0997
        },
        {
            lat: 2.9633,
            lng: 38.1440
        }

    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}