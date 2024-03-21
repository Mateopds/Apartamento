document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //Enero es 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        editable: true,
        defaultDate: today,
        eventColor: 'red', // Cambiar el color de fondo de los días no disponibles
        events: [
            {
                title: 'No disponible',
                start: '2024-03-14'
            },
            {
                title: 'No disponible',
                start: '2024-03-15'
            }
        ],
        dayRender: function(info) {
            var today = new Date().toISOString().slice(0,10);
            if (info.date.toISOString().slice(0,10) < today) {
                info.el.style.backgroundColor = 'gray'; // Cambiar el color de fondo de los días pasados
            }
        },
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        locale: 'es', // Cambiar el idioma del calendario a español
        // Otros ajustes de configuración según tus necesidades
    });

    calendar.render();
});
