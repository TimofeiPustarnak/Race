const score = document.querySelector('.score');
const start = document.querySelector('.start');
const gameArea = document.querySelector('.game-area');
const car = document.createElement('div');
const body = document.querySelector('body');

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
  speed: 5
};

console.log(body.clientWidth);
function playGame() {
  if (setting.start) {
    if (keys.ArrowLeft) {
      setting.x -= setting.speed;
    }

    if (keys.ArrowRight) {
      setting.x += setting.speed;
    }

    if (keys.ArrowDown) {
      setting.y += setting.speed;
    }

    if (keys.ArrowUp) {
      setting.y -= setting.speed;
    }

    if (setting.x <= 250 && setting.x >= 0)
    {
      car.style.left = setting.x + 'px';
    } else 
    {
      if (setting.x > 250)
      setting.x = 250;
      if (setting.x < 0)
      setting.x = 0;
    }

    if (setting.y >= 0)
    {
      car.style.top = setting.y + 'px';
    } else 
    {
      if (setting.y < 0)
      setting.y = 0;
    }

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
      keys[event.key] = false;
    }
}

start.addEventListener('click', () => {
  setting.start = true;
  start.classList.add('hide');
  requestAnimationFrame(playGame);
  gameArea.appendChild(car);
  // *  вставляем ребенка в элемент
  setting.x = car.offsetLeft;
  setting.y = car.offsetTop;
});

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

