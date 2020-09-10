const score = document.querySelector('.score');
const start = document.querySelector('.start');
const gameArea = document.querySelector('.game-area');
const car = document.createElement('div');
const body = document.querySelector('body');

car.classList.add('car');

function getQuantityElements (height) {
  return document.documentElement.clientWidth / height + 1;
}

for (let i = 0; i < getQuantityElements(80); ++i)
{
  const line = document.createElement('div');
  line.classList.add('line');
  line.style.left = (i * 80) + 'px';
  line.x = i * 80;
  gameArea.appendChild(line);
}

for (let i = 0; i < getQuantityElements(80); ++i)
{
  const line1 = document.createElement('div');
  line1.classList.add('line1');
  line1.style.left = (i * 80) + 'px';
  line1.x = i * 80;
  gameArea.appendChild(line1);
}

for (let i = 0; i < getQuantityElements(80); ++i)
{
  const line2 = document.createElement('div');
  line2.classList.add('line2');
  line2.style.left = (i * 80) + 'px';
  line2.x = i * 80;
  gameArea.appendChild(line2);
}

for (let i = 0; i < getQuantityElements(80); ++i)
{
  const line3 = document.createElement('div');
  line3.classList.add('line3');
  line3.style.left = (i * 80) + 'px';
  line3.x = i * 80;
  gameArea.appendChild(line3);
}

let lines = document.querySelectorAll('.line');
let lines1 = document.querySelectorAll('.line1');
let lines2 = document.querySelectorAll('.line2');
let lines3 = document.querySelectorAll('.line3');

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

const setting = {
  start: false,
  score: 0,
  speed: 10,
  traffic: 3
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

    if(line.x < -80) {
      line.x = document.documentElement.clientWidth + (80 - document.documentElement.clientWidth % 80);
    }
  })

  lines1.forEach(function(line1){
    line1.x -= setting.speed;
    line1.style.left = line1.x + 'px';
    line1.style.left = line1.x + 'px';

    if(line1.x < -80) {
      line1.x = document.documentElement.clientWidth + (80 - document.documentElement.clientWidth % 80);
    }
  })

  lines2.forEach(function(line2){
    line2.x -= setting.speed;
    line2.style.left = line2.x + 'px';
    line2.style.left = line2.x + 'px';

    if(line2.x < -80) {
      line2.x = document.documentElement.clientWidth + (80 - document.documentElement.clientWidth % 80);
    }
  })

  lines3.forEach(function(line3){
    line3.x -= setting.speed;
    line3.style.left = line3.x + 'px';
    line3.style.left = line3.x + 'px';

    if(line3.x < -80) {
      line3.x = document.documentElement.clientWidth + (80 - document.documentElement.clientWidth % 80);
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

