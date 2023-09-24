const daysDiv = document.getElementById('days');
const hoursDiv = document.getElementById('hours');
const minutesDiv = document.getElementById('minutes');
const secondsDiv = document.getElementById('seconds');

const newYear = '1 Jan 2024';

const countDown = () =>{
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600)  % 24;
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    daysDiv.innerText = days;
    hoursDiv.innerText = hours;
    minutesDiv.innerText = minutes;
    secondsDiv.innerText = seconds;
}

countDown();

setInterval(countDown,1000);