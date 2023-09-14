const clock = document.querySelector('#clock');

const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function MyFnc () {
    const date = new Date;
    hours.innerHTML = date.getHours().toString().padStart( 2, '0');
    minutes.innerHTML = date.getMinutes().toString().padStart(2, '0'); // ajoute 0 devant la minute lorsqu'elle est inférieure à 10
    seconds.innerHTML = date.getSeconds().toString().padStart(2, '0');

    hours.innerHTML += ':';
    minutes.innerHTML += ':';

    //pour obtenir les coordonnées des bords inférieurs droits des éléments HTML
    const hoursRect =hours.getBoundingClientRect();
    const minutesRect =minutes.getBoundingClientRect();
    const secondsRect =seconds.getBoundingClientRect();

    //Reposition des éléments HTML
    hours.style.left = hoursRect.left;
    hours.style.bottom = hoursRect.bottom;
    minutes.style.left = minutesRect.left;
    minutes.style.bottom = minutesRect.bottom;
    seconds.style.left = secondsRect.left;
    seconds.style.bottom = secondsRect.bottom;
    
}

setInterval(MyFnc, 1000);

