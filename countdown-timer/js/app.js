const newYears = '1 Jan 2024';

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(seconds / 3600 / 24);

    console.log(days);
}

// Function call
countDown();

setInterval(countDown, 1000)