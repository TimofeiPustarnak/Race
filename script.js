const score = document.querySelector('.score');
const start = document.querySelector('.start');
const gameArea = document.querySelector('.game-area');
const car = document.createElement('div');

car.classList.add('car');

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

const setting = {
  start: false,
  score: 0,
  speed: 3
};

function playGame() {
  if (setting.start) {
    requestAnimationFrame(playGame);
  }
}

function startRun(event) {
  if (event.key == 'ArrowUp' || event.key == 'ArrowDown' 
    || event.key == 'ArrowRight' || event.key == 'ArrowLeft') {
      // *  event это в данном случае нажатие клавиши
      event.preventDefault();
      keys[event.key] = true;
    }
  // *  отключаем стандартное поведение браузера на эту клавишу
}

function stopRun(event) {
  if (event.key == 'ArrowUp' || event.key == 'ArrowDown' 
    || event.key == 'ArrowRight' || event.key == 'ArrowLeft') {
      event.preventDefault();
      keys[event.key] = true;
    }
}

start.addEventListener('click', () => {
  setting.start = true;
  start.classList.add('hide');
  requestAnimationFrame(playGame);
  gameArea.appendChild(car);
  // *  вставляем ребенка в элемент
});

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

