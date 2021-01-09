var xhr = new XMLHttpRequest();

var data;

xhr.open("GET", "https:./swapi.co/api")

xhr.send();

function setData() {

}
xhr.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
        data = this.responseText;
    }
};
console.log(JSON.parse(this.responseText));

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
});