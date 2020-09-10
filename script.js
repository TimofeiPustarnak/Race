const score = document.querySelector('.score');
const start = document.querySelector('.start');
const gameArea = document.querySelector('.game-area');
const car = document.createElement('div');
const body = document.querySelector('body');
const scoreValue = document.querySelector('.score__num');

car.classList.add('car');

function getQuantityElements (height) {
  return document.documentElement.clientWidth / height + 3;
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
  traffic: 20,
  enemySpeed: 1.2 + Math.random(),
  enemySpeed1: 1.2 + Math.random(),
  enemySpeed2: 1.2 + Math.random(),
  enemySpeed3: 1.2 + Math.random(),
  enemySpeed4: 1.2 + Math.random()
};

// console.log(scoreValue);
scoreValue.textContent = `${setting.score}`;


const enemy = document.createElement('div');
enemy.classList.add('enemy');
gameArea.appendChild(enemy);
enemy.x = document.documentElement.clientWidth + getRandomInRange(0, setting.traffic) * document.documentElement.clientWidth * .1;
enemy.style.left = enemy.x + 'px';

const enemy1 = document.createElement('div');
enemy1.classList.add('enemy');
enemy1.classList.add('enemy1');
gameArea.appendChild(enemy1);
enemy1.x = document.documentElement.clientWidth + getRandomInRange(0, setting.traffic) * document.documentElement.clientWidth * .1;
enemy1.style.left = enemy1.x + 'px';

const enemy2 = document.createElement('div');
enemy2.classList.add('enemy');
enemy2.classList.add('enemy2');
gameArea.appendChild(enemy2);
enemy2.x = document.documentElement.clientWidth + getRandomInRange(0, setting.traffic) * document.documentElement.clientWidth * .1;
enemy2.style.left = enemy2.x + 'px';

const enemy3 = document.createElement('div');
enemy3.classList.add('enemy');
enemy3.classList.add('enemy3');
gameArea.appendChild(enemy3);
enemy3.x = document.documentElement.clientWidth + getRandomInRange(0, setting.traffic) * document.documentElement.clientWidth * .1;
enemy3.style.left = enemy3.x + 'px';

const enemy4 = document.createElement('div');
enemy4.classList.add('enemy');
enemy4.classList.add('enemy4');
gameArea.appendChild(enemy4);
enemy4.x = document.documentElement.clientWidth + getRandomInRange(0, setting.traffic) * document.documentElement.clientWidth * .1;
enemy4.style.left = enemy4.x + 'px';

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame() {
  if (setting.start) {
    renderScore();
    chekCrush();
    moveRoad();
    enemyMove();
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

function renderScore() {
  scoreValue.textContent = `${setting.score}`;
}

function chekCrush() {
  if (car.offsetLeft + 100 >= enemy.offsetLeft && car.offsetLeft <= enemy.offsetLeft + 100 && car.offsetTop + 50 >= enemy.offsetTop && car.offsetTop < enemy.offsetTop + 50)
  {
    setting.start = false;
  }

  if (car.offsetLeft + 100 >= enemy1.offsetLeft && car.offsetLeft <= enemy1.offsetLeft + 100 && car.offsetTop + 50 >= enemy1.offsetTop && car.offsetTop < enemy1.offsetTop + 50)
  {
    setting.start = false;
  }

  if (car.offsetLeft + 100 >= enemy2.offsetLeft && car.offsetLeft <= enemy2.offsetLeft + 100 && car.offsetTop + 50 >= enemy2.offsetTop && car.offsetTop < enemy2.offsetTop + 50)
  {
    setting.start = false;
  }

  if (car.offsetLeft + 100 >= enemy3.offsetLeft && car.offsetLeft <= enemy3.offsetLeft + 100 && car.offsetTop + 50 >= enemy3.offsetTop && car.offsetTop < enemy3.offsetTop + 50)
  {
    setting.start = false;
  }

  if (car.offsetLeft + 100 >= enemy4.offsetLeft && car.offsetLeft <= enemy4.offsetLeft + 100 && car.offsetTop + 50 >= enemy4.offsetTop && car.offsetTop < enemy4.offsetTop + 50)
  {
    setting.start = false;
  }
}

function enemyMove() {
  enemy.x -= setting.speed * setting.enemySpeed;
  enemy.style.left = enemy.x + 'px';
  if (enemy.x  < -100) {
    setting.score += 10;
    enemy.x = document.documentElement.clientWidth + getRandomInRange(0, setting.traffic) * document.documentElement.clientWidth * .1;
    setting.enemySpeed = 1.2 + Math.random();
  }

  enemy1.x -= setting.speed * setting.enemySpeed1;
  enemy1.style.left = enemy1.x + 'px';
  if (enemy1.x < -100) {
    setting.score += 10;
    enemy1.x = document.documentElement.clientWidth + getRandomInRange(0, setting.traffic) * document.documentElement.clientWidth * .1;
    setting.enemySpeed1 = 1.2 + Math.random();
  }

  enemy2.x -= setting.speed * setting.enemySpeed2;
  enemy2.style.left = enemy2.x + 'px';
  if (enemy2.x < -100) {
    setting.score += 10;
    enemy2.x = document.documentElement.clientWidth + getRandomInRange(0, setting.traffic) * document.documentElement.clientWidth * .1;
    setting.enemySpeed2 = 1.2 + Math.random();
  }

  enemy3.x -= setting.speed * setting.enemySpeed3;
  enemy3.style.left = enemy3.x + 'px';
  if (enemy3.x < -100) {
    setting.score += 10;
    enemy3.x = document.documentElement.clientWidth + getRandomInRange(0, setting.traffic) * document.documentElement.clientWidth * .1;
    setting.enemySpeed3 = 1.2 + Math.random();
  }

  enemy4.x -= setting.speed * setting.enemySpeed4;
  enemy4.style.left = enemy4.x + 'px';
  if (enemy4.x < -100) {
    setting.score += 10;
    enemy4.x = document.documentElement.clientWidth + getRandomInRange(0, setting.traffic) * document.documentElement.clientWidth * .1;
    setting.enemySpeed4 = 1.2 + Math.random();
  }
}


function moveRoad() {
  lines.forEach(function(line){
    line.x -= setting.speed * .8;
    line.style.left = line.x + 'px';

    if(line.x < -80) {
      line.x = document.documentElement.clientWidth + (80 - document.documentElement.clientWidth % 80);
    }
  })

  lines1.forEach(function(line1){
    line1.x -= setting.speed * .8;
    line1.style.left = line1.x + 'px';
    line1.style.left = line1.x + 'px';

    if(line1.x < -80) {
      line1.x = document.documentElement.clientWidth + (80 - document.documentElement.clientWidth % 80);
    }
  })

  lines2.forEach(function(line2){
    line2.x -= setting.speed * .8;
    line2.style.left = line2.x + 'px';
    line2.style.left = line2.x + 'px';

    if(line2.x < -80) {
      line2.x = document.documentElement.clientWidth + (80 - document.documentElement.clientWidth % 80);
    }
  })

  lines3.forEach(function(line3){
    line3.x -= setting.speed * .8;
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

