$("button").click(function() {
    $("h3, h4, p").addClass("green");
    $("div").addClass("important");
}); <
/script>

function openLink(evt, linkName) {
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
    const baseURL = "https://ci-swapi.herokuapp.com/api/";

    function getData(type, cb) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                cb(JSON.parse(this.responseText));
            }
        };

        xhr.open("GET", baseURL + type + "/");
        xhr.send();
    }
    // codeinstitute example
    function getTableHeaders(obj) {
        var tableHeaders = [];

        Object.keys(obj).forEach(function(key) {
            tableHeaders.push(`<td>${key}</td>`)
        });

        return `<tr>${tableHeaders}</tr>`;
    }

    function writeToDocument(type) {
        var el = document.getElementById("data");
        el.innerHTML = "";

        getData(type, function(data) {
            var tableRows = [];
            data = data.results;
            var tableHeaders = getTableHeaders(data[0]);

            data.forEach(function(item) {
                var dataRow = [];

                Object.keys(item).forEach(function(key) {
                    dataRow.push(`<td>${item[key]}</td>`);
                });
                tableRows.push(dataRow)
            });

            el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
        });
    }