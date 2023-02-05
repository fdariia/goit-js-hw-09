const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.body,
}

const isActive = true;
let timeoutID = null;
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

    refs.body.style.backgroundColor = getRandomHexColor();
    timeoutID = setTimeout(onStartBtn, 1000);
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
    clearTimeout(timeoutID);  
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}