var fontFamily = $("p").css("font-family");
"lato", "sans-serif"
$(".card-panel").css("background-color", "teal");
$("").text(fontFamily);
// 

$("tr:odd").addClass("odd");
$("tr:even").addClass("even");
// 
$("p").click(function () {
    $("p").css("color", "aqua")
});
$("h").hover(function () {
    $("h3").css("background", "lightblue")
});
$(".card-panel").mouseenter(function () {
    $("body").css("background-color", "")
});
$(".card-panel").mouseleave(function () {
    $("body").css("background-color", "rgba:(azure);");
});
// 
// background img
$('myObject').css('background-image', 'url(' + imageUrl + ')');

// -collapse
$('.collapse').collapse()
// 


// 
$(".button").hover(function () {
    $("button").mouseenter(function () {
        $("button").removeClass("make-teal").addClass("make-border");
    })
})
$(".button").hover(function () {
    $("button").mouseleave(function () {
        $("button").removeClass("make-border").addClass("make-red");
    })
})
// 
$("#myButton").removeClass("border").addClass("blueBox");

// 

$("#button-card-1").click(function () {
    $("#par-1").hide(5000).show(8000);
});
$("#button-card-2").click(function () {
    $("#par-2").fadeOut(5000).fadeIn(8000);
});



// 


// 

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