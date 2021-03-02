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

function get_post($post = null, $output = OBJECT, $filter = 'raw') {
    if (empty($post) && isset($GLOBALS['post'])) {
        $post = $GLOBALS['post'];
    }

    if ($post instanceof WP_Post) {
        $_post = $post;
    }
    elseif(is_object($post)) {
        if (empty($post - > filter)) {
            $_post = sanitize_post($post, 'raw');
            $_post = new WP_Post($_post);
        }
        elseif('raw' === $post - > filter) {
            $_post = new WP_Post($post);
        } else {
            $_post = WP_Post::get_instance($post - > ID);
        }
    } else {
        $_post = WP_Post::get_instance($post);
    }

    if (!$_post) {
        return null;
    }

    $_post = $_post - > filter($filter);

    if (ARRAY_A == $output) {
        return $_post - > to_array();
    }
    elseif(ARRAY_N == $output) {
        return array_values($_post - > to_array());
    }

    return $_post;
}


// Theme parks Snorkkling tour City tours Museum UNESCOSights Masaai Market Open village market City mall Cinema
}


// Theme parks Snorkkling tour City tours Museum UNESCOSights Masaai Market Open village market City mall Cinema