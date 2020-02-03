function attachEventsListeners() {
    let buttons = document.querySelectorAll('input[type="button"]');

    for (const button of buttons) {
        button.addEventListener('click', convert);
    }
    
    function convert(event) {
        let type = event.target.parentElement.children[1].id;
        let value = +event.target.parentElement.children[1].value;

        let seconds = 0;

        if (type === "days") {
            seconds = value * 24 * 60 * 60;
        } else if (type === "hours") {
            seconds = value * 60 * 60;
        } else if (type === "minutes") {
            seconds = value * 60;
        } else if(type === "seconds") {
            seconds = value;
        }

        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

}