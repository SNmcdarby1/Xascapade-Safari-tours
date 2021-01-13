var xhr = new XMLHttpRequest();

function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "URL");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);
console.log();


fetch('./api/some.json')
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                console.log(data);
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });








$.ajax({
    type: "POST",
    url: newFunction(),
    data: dataString,
    success: function() {
        $("#contact_form").html("<div id='404'></div>");
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


function newFunction() {
    return "bin/process.php";
}