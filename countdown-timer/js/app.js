const daysElements = document.getElementById("days");
const hoursElements = document.getElementById("hours");
const minsElements = document.getElementById("mins");
const secondsElements = document.getElementById("seconds");

const newYears = '1 Jan 2024';

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds/ 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElements.innerHTML = days;
    hoursElements.innerHTML = formatTime(hours);
    minsElements.innerHTML = formatTime(minutes);
    secondsElements.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
// Function call
countDown();
 

setInterval(countDown, 1000)