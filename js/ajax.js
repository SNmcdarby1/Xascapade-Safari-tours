function getData(url, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(_send) {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

function generateSubmitButtons(next, prev) {
    if (next && prev) {
        return `<button onclick="writeToDocument('${submit}')">Previous</button>
                <button onclick="writeToDocument('${book}')">Next</button>`;
    } else if (next && !prev) {
        return `<button onclick="writeToDocument('${book}')">Next</button>`;
    } else if (!next && prev) {
        return `<button onclick="writeToDocument('${submit}')">Previous</button>`;
    }
}

function writeToDocument(url) {
    var tableRows = [];
    var el = document.getElementById("data");

    getData(url, function(data) {
        var button, submit = "";

        if (data.next || data.previous) {
            submit = generateSubmitButtons(data.next, data.previous);
        }
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];

            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${button, submit}`.replace(/,/g, "");
    });
}
// 
const baseURL = "URL";

function getData(_URL, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function getTableHeaders(_Obj) {
    var getTableHeaders = [];

    Object.keys(obj).forEach(function(key) {
            tableHeaders.push(`<td>${key}</td>`);
        )
    };
    return `<tr>${tableHeaders}</tr>`;
}



function writeToDocument(type) {
    val el = document.getElementById("data");
    el.innerHTML = "";
    getData(type, function(data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(_item) {

            //    el.innerHTML += "<p>  + item.name +" </p>;
        });
        el.innerHTML = `<table>${tableHeaders}</table>`;
    });


    xhr.open("GET", URL + type + "/"); {
        xhr.send() {
                Object.keys(item).forEach(function(_key) {};

                        function showCustomer(str) {
                            var xhttp;
                            if (str == "") {
                                document.getElementById("txtHint").innerHTML = "";
                                return;
                            }
                            xhttp = new XMLHttpRequest();
                            xhttp.onreadystatechange = function() {
                                if (this.readyState == 4 && this.status == 200) {
                                    document.getElementById("txtHint").innerHTML = this.responseText;
                                }
                            };
                            xhttp.open("GET", "getcustomer.php?q=" + str, true);
                            xhttp.send();
                        }

                        var XMLHttpRequest: new() => XMLHttpRequest(); xmlhttp.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                var myObj = JSON.parse(this.responseText);
                                document.getElementById("demo").innerHTML = myObj.name;
                            }
                        }; xmlhttp.open("GET", "_file.php", "safari", true); xmlhttp.send();