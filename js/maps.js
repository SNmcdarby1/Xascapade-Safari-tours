var mymap = L.map('mapid').setView([-1.28579, 36.82003], 8);
var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
let locations = [{
        lat: -4.05428,
        lng: 39.6043
    },
    {
        lat: -0.28066,
        lng: 36.07942
    },
    {
        lat: -1.27381,
        lng: 36.83175
    },
    {
        lat: -4.05208,
        lng: 39.70079
    },
    {
        lat: -1.28634,
        lng: 36.76013
    },
    {
        lat: -1.27381,
        lng: 36.83175
    },
    {
        lat: 0.01607,
        lng: 37.07795
    }
];

markers = ["A, B, C,D E, F , G ,H ,I ,J ,K ,L M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"];



var map = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    });
});;