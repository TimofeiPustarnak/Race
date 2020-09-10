const score = document.querySelector('.score');
const start = document.querySelector('.start');
const gameArea = document.querySelector('.game-area');
const car = document.createElement('div');
const body = document.querySelector('body');

car.classList.add('car');

for (let i = 0; i < 30; ++i)
{
  const line = document.createElement('div');
  line.classList.add('line');
  line.style.left = (i * 75) + 'px';
  line.x = i * 75;
  gameArea.appendChild(line);
}

let lines = document.querySelectorAll('.line');

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

function playGame() {
  if (setting.start) {
    moveRoad();

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

    if (setting.x <= gameArea.clientWidth - 100 && setting.x >= 0)
    {
      car.style.left = setting.x + 'px';
    } else 
    {
      if (setting.x > gameArea.clientWidth - 100)
      setting.x = gameArea.clientWidth - 100;
      if (setting.x < 0)
      setting.x = 0;
    }

    if (setting.y >= 0 && setting.y <= 400)
    {
      car.style.top = setting.y + 'px';
    } else 
    {
      if (setting.y < 0)
      setting.y = 0;
      if (setting.y > 400)
      setting.y = 400;
    }

    requestAnimationFrame(playGame);
  }
}

function moveRoad() {
  lines.forEach(function(line){
    line.x -= setting.speed;
    line.style.left = line.x + 'px';

    if(line.x < -50) {
      line.x = document.documentElement.clientWidth + (75 - document.documentElement.clientWidth % 75) + 25;
    }
  })
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

