var xhr = new XMLHttpRequest();

function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
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


$.ajax({
    type: "POST",
    url: newFunction(),
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
});

function newFunction() {
    return "bin/process.php";
}