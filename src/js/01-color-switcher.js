const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.body,
}

const isActive = true;
let intervalID = null;
refs.stopBtn.setAttribute('disabled', true);

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);
//Коли натискаємо на startBtn то:
// 1) кнопці додається атрибут disabled
// 2) backgroundColor на body
// 3) встановлюється setTimeout
function onStartBtn() {
    if (isActive) {
        refs.startBtn.setAttribute('disabled', true);
        refs.stopBtn.removeAttribute('disabled');
    }

    intervalID = setInterval(() => {refs.body.style.backgroundColor = getRandomHexColor()}, 1000);
}
//Коли натискаємо на stopBtn то:
// 1) кнопці додається атрибут disabled
// 2) backgroundColor на body
// 3) встановлюється setTimeout
function onStopBtn() {
    if (isActive) {
        refs.startBtn.removeAttribute('disabled');
        refs.stopBtn.setAttribute('disabled', true);
    }
    clearInterval(intervalID);  
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}