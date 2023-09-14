const today = document.querySelector('#today');

function DayFunction() {

    const date = new Date();

    today.innerHTML = date.toLocaleDateString();
}

setInterval(DayFunction, 1000);