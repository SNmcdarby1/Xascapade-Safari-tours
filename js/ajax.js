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


const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function getTableHeaders(Obj) {
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

        data.forEach(function(item) {

            //    el.innerHTML += "<p>  + item.name +" </p>;
        });
        el.innerHTML = `<table>${tableHeaders}</table>`;
    });


    xhr.open("GET", baseURL + type + "/"); {
        xhr.send() {
                Object.keys(item).forEach(function(key) {};

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

                        var xmlhttp = new XMLHttpRequest(); xmlhttp.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                var myObj = JSON.parse(this.responseText);
                                document.getElementById("demo").innerHTML = myObj.name;
                            }
                        }; xmlhttp.open("GET", "demo_file.php", "safari", true); xmlhttp.send();