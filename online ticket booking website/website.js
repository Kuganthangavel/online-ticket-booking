document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const bookingResponse = document.getElementById('bookingResponse');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulate booking process
        const formData = new FormData(bookingForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const tickets = formData.get('tickets');
        const eventSelection = formData.get('event');

        // Simulated booking result
        const bookingSuccessful = Math.random() < 0.8; // 80% success rate

        if (bookingSuccessful) {
            bookingResponse.classList.remove('error');
            bookingResponse.classList.add('success');
            bookingResponse.innerHTML = `<p>Booking for ${tickets} tickets for ${eventSelection} is confirmed for ${name} (${email}).</p>`;
        } else {
            bookingResponse.classList.remove('success');
            bookingResponse.classList.add('error');
            bookingResponse.innerHTML = `<p>Booking failed. Please try again later.</p>`;
        }
    });
});
