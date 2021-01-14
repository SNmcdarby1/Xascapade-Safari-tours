function() {
    emailjs.init("user_4yI8AhyqyWQa3VahbN5Ra");
})();

var templateParams = {
    name: 'Susan',
    notes: 'Thank you for your email. 
    We will respond to you as soon as possible.
    Have a lovely day.
    Xascapade Travel!'
};
//  emailjs.send("Xascapade Travel","template_sw4onkb");
emailjs.send('user_4yI8AhyqyWQa3VahbN5Ra', 'Xascapade_Travel', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });




// code fragment
// the form id is myForm
$('#myForm').on('submit', function(event) {
    event.preventDefault(); // prevent reload

    var formData = new FormData(this);
    formData.append('Xascapade Travel', 'Xascapade Travel');
    formData.append('template_id', 'YOUR_TEMPLATE_ID');
    formData.append('Xascapade Travel', 'Xascapade Travel');

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
}); <
/script>