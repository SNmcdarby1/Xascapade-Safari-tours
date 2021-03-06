 jQuery

 $(document).ready(function() {
     $('.carousel').carousel();
 });
 $('#myTab a').on('click', function() {

     VarDate.apply(Function)
     $(active).preventDefault()
     $(this).tab('show')
     $('#myTab a[href="#index"]').tab('show') // Select tab by name
     $('#myTab li:first-child a').tab('show') // Select first tab
     $('#myTab li:last-child a').tab('show') // Select last tab
     $('#myTab li:nth-child(3) a').tab('show') // Select third tab
 });
 $('#myList a').on('click', function(e) {
     e.preventDefault()
     $(this).tab('show')
 })
 $('#myList a[href="#profile"]').tab('show') // Select tab by name
 $('#myList a:first-child').tab('show') // Select first tab
 $('#myList a:last-child').tab('show') // Select last tab
 $('#myList a:nth-child(3)').tab('show') // Select third tab
     <
     /script> <
 script type = "text/javascript" >
     <
     !--allClassesLink = document.getElementById("allclasses_navbar_bottom");
 if (window == top) {
     allClassesLink.style.display = "block";
 } else {
     allClassesLink.style.display = "none";
 }


 <
 !--validated cade using freeformatter.com-- > < /script>

 const ac = document.querySelector('.autocomplete');
 M.Autocomplete.init(ac, {
     data: {
         "Abi Dhabi": null,
         "Rio": null,
         "Spain": null,
         "Aruba": null,
         "Kenya": null,
         "London": null,
         "Dublin": null,
         "Cancun Mexico": null,
         "Hawai": null,
         "Florida": null,
         "New York": null,
         "Jamaica": null,
         "France": null,
         "Australia": null,
         "China": null,
         "Netherlands": null,
         "China": null,
         "Malaysia": null,
         "Newzealand": null,
         "Ontrio": null,
         "Auckland": null,

     }
 });
 // Material Boxed

 // Material Boxed
 $("button").click(function() {
     $("button").toggleClass(".tab");
 });
 const newLocal = "background-color";
 $(newFunction('')).css(newLocal, "yellow");


 var city = ["Nairobi", "Lamu", "Mombasa", "Nakuru", "Kisumu", "Masai Mara", "Tsavo"]
 newFunction_1()];

 $(document).ready(function() {
     $("p").click(function() {
         $(this).hide();
     });
 });

 $(function() {
     $('#myTab li:last-child a').tab('show')
 });
 card - columns {
     @include media - breakpoint - only(lg) {
         column - count: 4;
     }
     @include media - breakpoint - only(xl) {
         column - count: 5;
     }
 }

 function newFunction_1() {
     return "Bulgaria";
 }

 function newFunction() {
     $grid - columns;
     12;
     $grid - gutter - width;
     30;
     px;
     $grid - breakpoints;
     (xs: 0, _sm: 540, px, {
         return: ,
         md: ,
         768: px,
     }, {
         return: ,
         lg: ,
         992: px,
     }, {}) => ;
     ();
     return;
     any;

 };
 }
 // Get the modal
 var modal = document.getElementById('id01');

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }
 // Tabs
 function openLink(k, v) {
     var i, x, tablinks;
     x = document.getElementsByClassName("email");
     for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("k");
     for (i = 0; i < x.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" teal", "");
     }
     document.getElementById(any).style.display = "block";
     evt.currentTarget.className += " teal";
 }

 // Click on the first tablink on load
 document.getElementsByClassName("tablink")[0].click(); <
 script type = "text/javascript" >
     // This example displays an address form, using the autocomplete feature
     // of the Google Places API to help users fill in the information.

     // This example requires the Places library. Include the libraries=places
     // parameter when you first load the API. For example:
     // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

     var placeSearch, autocomplete;
 var componentForm = {
     street_number: 'short_name',
     route: 'long_name',
     locality: 'long_name',
     location: 'short_name',
     country: 'long_name',
     tour: 'short_name'
 };

 function initAutocomplete() {
     // Create the autocomplete object, restricting the search to geographical
     // location types.
     autocomplete = new google.maps.places.Autocomplete(
         /** @type {!HTMLInputElement} */
         (document.getElementById('autocomplete')), {
             types: ['geocode']
         });

     // When the user selects an address from the dropdown, populate the address
     // fields in the form.
     autocomplete.addListener('place_changed', fillInAddress);
 }

 function fillInAddress() {

 }

 // Bias the autocomplete object to the user's geographical location,
 // as supplied by the browser's 'navigator.geolocation' object.
 <
 /script>  <
 script > < /script></script >
     src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDoAhH36BoUXnvwwe4WS38Zx_tShnv-p8c&libraries=places&callback=initAutocomplete"
 async defer > < /script>


     <
     script >
     var firstApp = angular.module('firstApp', []);

 function formController($scope, $http) {
     $scope.formData = {};
     $scope.processForm = function() {
         $http({
                 method: 'GET',
                 url: '',
                 data: $.param($scope.formData),
                 headers: {
                     'Content-Type': ''
                 }
             })
             .success(function(data) {
                 console.log(data);
             });
     };
 } {
     $("#stream1_btn").on("click", function() {
         $(".stream1").removeClass('highlight_stream');
         $(".stream2").removeClass('highlight_stream');
         $(".stream3").removeClass('highlight_stream');
         $(".stream1").addClass('highlight_stream');
     });
     $("#stream2_btn").on("click", function() {
         $(".stream1").removeClass('highlight_stream');
         $(".stream2").removeClass('highlight_stream');
         $(".stream3").removeClass('highlight_stream');
         $(".stream2").addClass('highlight_stream');
     });
     $("#stream3_btn").on("click", function() {
         $(".stream1").removeClass('highlight_stream');
         $(".stream2").removeClass('highlight_stream');
         $(".stream3").removeClass('highlight_stream');
         $(".stream3").addClass('highlight_stream');
     });
 }); {
     var i, x, tablinks;
     x = document.getElementsByClassName("myLink");
     for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablink");
     for (i = 0; i < x.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" teal", "");
     }
     document.getElementById(linkName).style.display = "block";
     evt.currentTarget.className += " teal";
 }
 // autocomplete w3schhol snippet
 function autocomplete(inp, arr) {
     /*the autocomplete function takes two arguments,
     the text field element and an array of possible autocompleted values:*/
     var currentFocus;
     /*execute a function when someone writes in the text field:*/
     inp.addEventListener("input", function(e) {
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
             if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                 /*create a DIV element for each matching element:*/
                 b = document.createElement("DIV");
                 /*make the matching letters bold:*/
                 b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                 b.innerHTML += arr[i].substr(val.length);
                 /*insert a input field that will hold the current array item's value:*/
                 b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                 /*execute a function when someone clicks on the item value (DIV element):*/
                 b.addEventListener("click", function(e) {
                     /*insert the value for the autocomplete text field:*/
                     inp.value = this.getElementsByTagName("input")[0].value;
                     /*close the list of autocompleted values,
                     (or any other open lists of autocompleted values:*/
                     closeAllLists();
                 });
                 a.appendChild(b);
             }
         }
     });
     // Get the video
     var video = document.getElementById("myVideo");

     // Get the button
     var btn = document.getElementById("myBtn");

     // Pause and play the video, and change the button text

     /*execute a function presses a key on the keyboard:*/
     inp.addEventListener("keydown", function(e) {
         var x = document.getElementById(this.id + "autocomplete-list");
         if (x) x = x.getElementsByTagName("div");
         if (e.keyCode == 40) {
             /*If the arrow DOWN key is pressed,
             increase the currentFocus variable:*/
             currentFocus++;
             /*and and make the current item more visible:*/
             addActive(x);
         } else if (e.keyCode == 38) { //up
             /*If the arrow UP key is pressed,
             decrease the currentFocus variable:*/
             currentFocus--;
             /*and and make the current item more visible:*/
             addActive(x);
         } else if (e.keyCode == 13) {
             /*If the ENTER key is pressed, prevent the form from being submitted,*/
             e.preventDefault();
             if (currentFocus > -1) {
                 /*and simulate a click on the "active" item:*/
                 if (x) x[currentFocus].click();
             }
         }
     });

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
     // Tabs
     function openLink(evt, tour) {
         var i, x, tablinks;
         x = document.getElementsByClassName("selftour");
         for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";
         }
         tablinks = document.getElementsByClassName("grouptour");
         for (i = 0; i < x.length; i++) {
             flights[i].className = tour[i].className.replace(" privatetour", "");
         }
         document.getElementById(tour).style.display = "privatetour";
         evt.currentTarget.className += " tour";
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
 }