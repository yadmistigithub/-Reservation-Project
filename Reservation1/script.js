document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        dateClick: function(info) {
            document.getElementById('selected-date').innerText = 'Selected Date: ' + info.dateStr;
        },
        eventClick: function(info) {
            document.getElementById('selected-time').innerText = 'Selected Time: ' + info.event.title;
        }
    });
    calendar.render();
});

function makeReservation() {
    var selectedDate = document.getElementById('selected-date').innerText;
    var selectedTime = document.getElementById('selected-time').innerText;
    
    if (selectedDate && selectedTime) {
        alert('Reservation successfully made for ' + selectedDate + ' at ' + selectedTime);
    } else {
        alert('Please select a date and time for the reservation.');
    }
}
