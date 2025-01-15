let currentClicks = 0;
let previousClicks = 0;
let timeRemaining = 5.0;
let interval;

const currentClicksElement = document.getElementById('currentClicks');
const previousClicksElement = document.getElementById('previousClicks');
const timerElement = document.getElementById('timer');
const clickBtn = document.getElementById('clickBtn');

function startTimer() {
    if (!interval) {
        interval = setInterval(() => {
            timeRemaining -= 0.1;
            timerElement.textContent = timeRemaining.toFixed(1);

            if (timeRemaining <= 0) {
                previousClicks = currentClicks;
                previousClicksElement.textContent = previousClicks;
                currentClicks = 0;
                currentClicksElement.textContent = currentClicks;
                clearInterval(interval);
                interval = null;
                clickBtn.disabled = true;
                clickBtn.style.backgroundColor = '#cccccc';
            }
        }, 100);
    }
}
clickBtn.addEventListener('click', () => {
    startTimer();
    currentClicks++;
    currentClicksElement.textContent = currentClicks;
});

function showClicksPerSecond() {
    const clicksPerSecond = previousClicks / 5;
    alert(`Your clicks per second: ${clicksPerSecond.toFixed(2)}`);
}

function startTimer() {
    if (!interval) {
        interval = setInterval(() => {
            timeRemaining -= 0.1;
            timerElement.textContent = timeRemaining.toFixed(1);

            if (timeRemaining <= 0) {
                previousClicks = currentClicks;
                previousClicksElement.textContent = previousClicks;
                currentClicks = 0;
                currentClicksElement.textContent = currentClicks;
                clearInterval(interval);
                interval = null;
                clickBtn.disabled = true;
                clickBtn.style.backgroundColor = '#cccccc';
                showClicksPerSecond();
            }
        }, 100);
    }
}
