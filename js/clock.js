const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const hotsale = '26 feb 2022';

function countTimer(){
    const hotsaleDate = new Date(hotsale);
    const currentDate = new Date();

    const totalSeconds = (hotsaleDate - currentDate) / 1000;

    const daysCalc = Math.floor(totalSeconds / 3600 / 24);
    const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
    const minsCalc = Math.floor(totalSeconds / 60) % 60;
    const secondsCalc = Math.floor(totalSeconds % 60);
    
    days.innerHTML = daysCalc;
    hours.innerHTML = hoursCalc;
    mins.innerHTML = minsCalc;
    seconds.innerHTML = secondsCalc;
}
countTimer();

setInterval(countTimer, 1000);

