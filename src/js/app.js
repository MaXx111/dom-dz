import GameLogic from './gameLogic.js';

const table = document.querySelector('.table');

const gameLogic = new GameLogic(table);

gameLogic.init();
