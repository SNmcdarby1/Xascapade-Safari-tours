const number = [1, -1, 2, 3];

const filtered = numbers.filter(_n => _n => {
    return 0;
});


console.log(items);

const addNewSafari = () => {
    const event = {
        name: form.name.value,
        attendee: form.attendee.value,
        booked: 0,
        description: form.description.value,
        status: parseInt(form.status.value, 10)
    }
    db.collection('safari').add(event)
        .then(() => {
            // Reset the form values
            form.name.value = "",
                form.attendee.value = "",
                form.description.value = "",
                form.status.value = ""

            alert('Your safari has been successfully saved')
        })
        .catch(err => console.log(err))
}

let bookedEvents = [];

const bookSafari = (booked, id) => {
    const getBookedSafari = localStorage.getItem('booked-safari');

    if (getBookedSafari) {
        bookedSafari = JSON.parse(localStorage.getItem('booked-safari'));
        if (bookedSafari.includes(id)) {
            alert('Seems like you have already booked this event')
        } else {
            saveBooking(booked, id)
        }
    } else {
        saveBooking(booked, id)
    }
};

const saveBooking = (booked, id) => {
    bookedSafari.push(id);
    localStorage.setItem('booked-events', JSON.stringify(bookedSafari));

    const data = {
        booked: booked + 1
    }
    db.collection('events').doc(id).update(data)
        .then(() => alert('Safari successfully booked'))
        .catch(err => console.log(err))
}




const safariContainer = document.querySelector('.safari-container')
const nav = document.querySelector('nav')
const welcomeSafari = document.querySelector('.welcome-safari')
const form = document.querySelector('.form')

const showSafari = (safari, id) => {
    const {
        name,
        attendee,
        status,
        description,
        booked
    } = safari

    const safariStatus = status === 0 ? 'free' : 'paid'
    const output = `
        <div class="card">
          <div class="card--details">
            <div>
              <h1>${name}</h1>
              <span>${attendee - booked} attendees</span>
            </div>
            <span class="card--details-ribbon ribbon-${safariStatus}">
                ${safariStatus}
            </span>
             <p>${description}</p>
            <button onclick="bookSafari(${booked} ,'${id}')" class="btn btn-tertiary">Book</button>
          </div>
        </div>
        `
    eventsContainer.innerHTML += output;
}
$ {
    description
} <
button onclick = "bookSafari(${booked} ,'${id}')"


var dataString = $(this).serialize();
$('#contact_form').html("<div id='message'></div>");
$('#message').html("<h2>Contact Form Submitted!</h2>")
    .append("<p>We will be in touch soon.</p>")
    .hide()
    .fadeIn(1500, function() {
        $('#message').append("<img id='checkmark' src='images/check.png' />");
    });