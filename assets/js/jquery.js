var fontFamily = $("p").css("font-family");
"lato", "sans-serif"
$(".card-panel").css("background-color", "teal");
$("").text(fontFamily);
// 

$("tr:odd").addClass("odd");
$("tr:even").addClass("even");
// 
$("p").click(function() {
    $("p").css("color", "aqua")
});
$("h").hover(function() {
    $("h3").css("background", "lightblue")
});
$(".card-panel").mouseenter(function() {
    $("body").css("background-color", "")
});
$(".card-panel").mouseleave(function() {
    $("body").css("background-color", "azure");
});
// 

var arr1 = ['Sarova Hotels', 'Serena hotels', 'Intercontinental Hotels', 'Camping', 'AirBnB', 'Safari Park Hotel Nairobi', 'Diani Hotel', 'White Sands Holtel', ];
var arr2 = ['safari', 'fish', 'apple', 'pizza'];
var arr3 = ['Theme',
    'parks',
    'Snorkkling',
    'tour',
    'City tours',
    'Museum',
    'UNESCO Sights',
    'Masaai Market',
    'Open village market',
    'City mall',
    'Cinema'
];



// Theme parks Snorkkling tour City tours Museum UNESCOSights Masaai Market Open village market City mall Cinema