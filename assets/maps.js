let map;

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: {
                {
                    lat: -34.397,
                    lng: 150.644
                },
                zoom: 8,
            });
    }

    function initMap()(method) Document.getElementById(elementId: string): HTMLElement {
        var map = newFunction();
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: {
                lat: -1.286389,
                lng: 36.817223
            }
        });
        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var locations = [{
                    lat: -1.286389,
                    lng: 36.817223
                },
                // {
                lat: -0.28066,
                lng: 36.07942
            },
            {
                lat: -1.27381,
                lng: 36.83175
            }, {
                lat: -4.05208,
                lng: 39.70079
            }, {
                lat: -1.28634,
                lng: 36.76013
            }, {
                lat: -1.27381,
                lng: 36.83175
            }, {
                lat: 0.01607,
                lng: 37.07795
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