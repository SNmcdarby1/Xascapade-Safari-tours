// 

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
    $("body").css("background-color", "black")
});
$(".card-panel").mouseleave(function() {
    $("body").css("background-color", "rgba:(0, 0, 0, .3);");
});
// 
// background img
$('myObject').css('background-image', 'url(' + imageUrl + ')');

-
// 
$("p").append("<span>paragraph</span>")
$("a").remove()
$(".module-2").empty()
$("div").click()
    (".module-1")
    (".module-2")
    (".module-1")
    (".module-2").empty();
// 
$("p").click(function() {
    $("p").text("All Changed");
});
// 
$("").click(function() {

});


// 
$(".button").hover(function() {
    $("button").mouseenter(function() {
        $("button").removeClass("make-teal").addClass("make-border");
    })
})
$(".button").hover(function() {
    $("button").mouseleave(function() {
        $("button").removeClass("make-border").addClass("make-red");
    })
})
// 
$("#myButton").removeClass("border").addClass("blueBox");

// 

$("#button-card-1").click(function() {
    $("#par-1").hide(2000).show(2000);
});
$("#button-card-2").click(function() {
    $("#par-2").fadeOut(1000).fadeIn(1000);
});



// 


// 

// 
var arr1 = ['Sarova Hotels', 'Serena hotels', 'Intercontinental Hotels', 'Camping', 'AirBnB', 'Safari Park Hotel Nairobi', 'Diani Hotel', 'White Sands Holtel',
    'Nakuru Lodge Hotel',
    'Intercontinental Hotel Nairobi',
    'Stanlley Hotel',
    'Red Elephant Hotel Tsavo',
    'Reef Hotel Mombasa',
    'Nyali Hotel Mombasa’',
    'Voyager Hotel Mombasa', 'African Safari Club',
    'La Pelgola Malindi',
    'Mada Hotel Kilifi',
    'Bamburi Beach Resort Mombasa',
    'Kilifi Bay Resort Kilifi',
    'Sun and Sand Club Mombasa',
    'Turtle Bay Watamu ',
    'Windsor Hotel',
    'FairMount Hotel and Resort Nairobi'
];
var arr2 = ['safari', 'fish', 'apple', 'pizza'];
'Theme',
'parks',
'Snorkkling',
'tour',
'City tours',
'Museum',
'UNESCO Sights',
'Masaai Market',
'Open village market',
'City mall',
'Cinema'];


// Theme parks Snorkkling tour City tours Museum UNESCOSights Masaai Market Open village market City mall Cinema



// Taxi To be advised
Private Jeep To be advised
Saloon car To be advised

Private car To be advised
Safari VanTo be advised
VIP car To be advised
To be advised To be advised



var arr3 = ['Taxi', 'Private Jeep', 'Saloon car', 'Private car', 'Safari Van', 'VIP car', ''
    '', '', ''
];



var result = arrays.shift().filter(function(v) {
    return arrays.every(function(a) {
        return a.indexOf(v) !== -1;
    });
});

arrays.sort(function(a, b) {
    return a.length - b.length;
});

function newFunction() {
    return '';
}
// $npm install @fortawesome/fontawesome-svg-core
// 
l.GroupBy(x => x.id).
Select(x => {
    var ret = x.First();
    ret.value = x.Sum(xt => xt.value);
    return ret;
}).ToList();