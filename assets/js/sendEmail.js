function sendEmail(tempParams) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("message").value,
    };
    emailjs.send("service_aw4lcie", "template_p9qe11h", tempParams)
        .then(function(res) {
                console.log("success", res.status);
            },
            function(error) {
                console.log("failed", error);
            }
        );
    return false;
}
// 
function
email (_email($_POST['name']) ||
    empty($_POST['email']) ||
    empty($_POST['phone']) ||
    empty($_POST['message']) ||
    !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo "No arguments Provided!";
    return false;
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
// Create th=e email and send the message
$to = 'xascapade.com'; // Add your email address in between the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n".
"Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "xascapade.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers. = "Reply-To: $email_address";
mail($to, $email_subject, $email_body, $headers);
return true;