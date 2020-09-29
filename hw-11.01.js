'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body')
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function getColor() {
  return colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function setColor() {
  refs.body.style.backgroundColor = getColor();
}

const timer = {
  intervalId: null,
  start() {
    refs.btnStart.setAttribute('disabled', true);
    this.intervalId = setInterval(() => {
      setColor();
    }, 1000);
  },
  stop() {
    refs.btnStart.removeAttribute('disabled');
    clearInterval(this.intervalId);
  },
};

refs.btnStart.addEventListener('click', timer.start.bind(timer));
refs.btnStop.addEventListener('click', timer.stop.bind(timer));
