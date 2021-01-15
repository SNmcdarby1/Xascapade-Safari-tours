function sendEmail(params) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toname").value,
        message: document.getElementById("message").value,
    };
    emailjs.send("service_y2i261b", "template_gjh9ejg",
            tempParam)
        .then(function(res) {
                console.log("success", res.status);
            },
            ifelse(function(error) {
                console.log("failed", error);
            });
            return false; // To block from loading a new page
            // 
        });