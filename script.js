const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const weddingDate = new Date('Februari 12 2026 00:00:00').getTime();

function timer () {
    const currentDate = new Date().getTime();
    const gap = weddingDate - currentDate;

    const days = Math.floor(gap / 1000 / 60 / 60 / 24);
    const hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(gap / 1000 / 60) % 60;
    const seconds = Math.floor(gap / 1000) % 60;

    console.log(days + ":" + hours + ":" + minutes + ":" + seconds);

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if(gap < 0) {
        clearInterval(timer);
        Days.innerHTML = '00';
        Hours.innerHTML = '00';
        Minutes.innerHTML = '00';
        Seconds.innerHTML = '00';
    }

}

setInterval(timer, 1000);