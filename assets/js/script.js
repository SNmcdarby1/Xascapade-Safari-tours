//   <script>
// Tabs function openLink(evt, linkName) {
var i, x, myLink;
x = document.getElementsByClassName("myLink");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" teal", "book");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " teal";
}
// dropdown
$('.dropdown-toggle').dropdown()
$('#myDropdown').on('show.bs.dropdown', function() {})
// carousel
// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function() {
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".carousel-control-prev").click(function() {
    $("#myCarousel").carousel("prev");
});

// topnav
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    (this: Window, ev: MouseEvent) => any)
onclick = "myFunction();
// onclick button
function myFunction() {
    var x = document.getElementById("xas1", "xas2", "xas3", "xas4", "xas5", arguments, ).method;
    document.getElementById("safari").innerHTML = x;
}
// autocomplete w3schhol snippet
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function() {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(, val.length).toUpperCase() == val
                .toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) +
                    "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] +
                    "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function() {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    // 
    function myFunction() {
        var x = document.getElementById("safari");
        var text = "";
        var i;
        for (i = 0; i < x.length; i++) {
            text += x.elements[i].value + "<br>";
        }
        document.getElementById("safari").innerHTML = text;
    }
    //  list
    function myFunction() {
        document.getElementById("myForm").submit();
    }
    //Append individual ITEM and individual PRICE to document
    var addToList = '<li class="addedItem">' + addItem +
        '<span> will cost you $</span>' + addPrice +
        '<button class="delete">Delete</button></li>';
    $('#items').append(addToList);

    $(document).ready(function() {

        //Stop the form from submitting
        $('#submit-form').submit(function(e) {
            e.preventDefault();
        });

        //Variables to store totals
        var itemCounter = 0;
        var priceCounter = 1000;

        //Handler to get value of ITEM and PRICE
        $('#submit-btn').click(function() {

            //Get value for submitted item and append to list
            var addItem = $('#item').val();
            itemCounter++;

            //Functionality to keep track of TOTAL PRICE and be able to remove an 
            //item so the price reflects the removal
            var addPrice = Number.parseInt($('#cost').val());
            alert(typeof(addPrice));
            priceCounter += addPrice;





            //Append ITEM and PRICE to document
            var addToList = '<li class="addedItem">' + addItem + '<span> will cost you $</span>' + addPrice + '<button class="delete">Delete</button></li>';
            $('#items').append(addToList);

            //Clear the form after submit
            $('#item').val('');
            $('#cost').val('');

            //Clear ESTIMATED COST TOTAL and append new total
            $('#estimatedCost').html('');
            $('#estimatedCost').append(priceCounter);


            //Appends totals to TOTALS
            //HTML to append
            $('#itemsTotal').html('');
            $('#itemsTotal').append(itemCounter);


        });

        //Functionality for Delete Button
        $(document).on('click', '.delete', function() { //Because the delete button has been created   
            //dynamically you must specify    
            $(this).parent().remove(); //to listen to the DOCUMENT for the click on 'DELETE'
            $(this).remove();
            alert($(this).prev().val());
            $('#estimatedCost').append(priceCounter);


        });

        //Function to create sum all off prices
        function sumPrice() {}

    });
    // tr
    $('table tr').each(function() {
        $(this).find('th').first().addClass('first');
        $(this).find('th').last().addClass('last');
        $(this).find('td').first().addClass('first');
        $(this).find('td').last().addClass('last');
    });

    $('table tr').first().addClass('row-first');
    $('table tr').last().addClass('row-last');


    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
} <
/script> <
script >
    $(".selector").controlgroup({
        classes: {
            "ui-controlgroup": "highlight"
        }
    });
$(function() {
    $(".controlgroup").controlgroup()
    $(".controlgroup-vertical").controlgroup({
        "direction": "vertical"
    });
});
// submit

$(document).ready(function() {
    $(":submit").css("background-color", "red");
});

$(document).ready(function() {
    $("button").click(function() {
        alert("Value: " + $("#safari").val());
    });
});
$(document).ready(function() {
    $("#basic-form").validate();
});
$("button").
submit
    ();
// validation 
$(function() {
    // set up form validation here
});
$(function() {
    $("form").validate();
});
$("form").on("submit", function(e) {

    var dataString = $(this).serialize();

    // 
    $.ajax({
        type: "POST",
        url: "bin/process.php",
        data: dataString,
        success: function() {
            $("#contact_form").html("<div id='message'></div>");
            $("#message")
                .html("<h2>Contact Form Submitted!</h2>")
                .append("<p>We will be in touch soon.</p>")
                .hide()
                .fadeIn(1500, function() {
                    $("#message").append(
                        "<img id='checkmark' src='images/check.png' />"
                    );
                });
        }
    });

    e.preventDefault();
});

$("form").on("submit", function(e) {
    var dataString = $(this).serialize();

    $.ajax({
        type: "POST",
        url: "bin/process.php",
        data: dataString,
        success: function() {
            // Display message back to the user here
        }
    });

    e.preventDefault();
});
document.getElementById("submit").
addEventListener
    ("click", myFunction);

// grid container
$('.cd-trigger').on('click', function(event) {
    $('.cd-quick-view').css({
            "top": topSelected, // this is the selected image top value
            "left": leftSelected, // this is the selected image left value
            "width": widthSelected, // this is the selected image width
        }).velocity({
            //animate the quick view: animate its width and center it in the viewport
            //during this animation, only the slider image is visible
            'width': sliderFinalWidth + 'px',
            'left': finalLeft + 'px', // ($(window).width - sliderFinalWidth)/2,
            'top': finalTop + 'px', // ($(window).height - slider final height)/2,
        }, 1000, [400, 20])
        .velocity({
            'width': quickViewWidth + 'px', // 80% of the viewport
            'left': quickViewLeft + 'px', // 10% of the viewport
        }, 300, 'ease', function() {
            //show quick view content
            $('.cd-quick-view').addClass('add-content');
        }).addClass('is-visible');
    //assign .overlay-layer class to the body, assign the .empty-box class to the selected .cd-item
    //...
});