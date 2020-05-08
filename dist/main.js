/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/dom.js

class DomMan {
  displayWinner(currentPlayer) {
    this.currentPlayer = currentPlayer;
    const message = document.createElement('div');
    message.id = 'message';
    message.classList.add('text-center', 'text-warning', 'font-weight-bold', 'h2', 'pt-4');
    message.innerHTML = ` Congratulations ${this.currentPlayer.name} Win`;
    document.getElementById('turnDisplay').innerHTML = '';
    document.getElementById('cont').appendChild(message);
  }

  displaytie(playerX, playerO) {
    this.playerX = playerX;
    this.playerO = playerO;
    const message = document.createElement('div');
    message.id = 'message';
    message.classList.add('text-center', 'text-warning', 'font-weight-bold', 'h2', 'pt-4');
    message.innerHTML = `${this.playerX.name} and ${this.playerO.name} it's a tie, play agian`;
    document.getElementById('turnDisplay').innerHTML = '';
    document.getElementById('cont').appendChild(message);
  }

  displayturn(currentPlayer) {
    this.currentPlayer = currentPlayer;
    const turnDisplay = document.createElement('div');
    turnDisplay.id = 'turnDisplay';
    turnDisplay.innerHTML = `Your turn ${this.currentPlayer.name}`;
    turnDisplay.classList.add('text-center', 'text-primary', 'font-weight-bold', 'h2', 'pt-4');
    document.getElementById('cont').appendChild(turnDisplay);
  }

  changeTurn(currentPlayer) {
    this.currentPlayer = currentPlayer;
    document.getElementById('turnDisplay').innerHTML = `Your turn ${this.currentPlayer.name}`;
  }

  updateBoard(board) {
    this.board = board;
    const gameBoard = document.getElementById('gameBoard');
    const sqr = gameBoard.childNodes;
    sqr.forEach((element, index) => {
      if (element.innerText !== this.board.arrayboard[index]) {
        element.innerText = this.board.arrayboard[index]; // eslint-disable-line no-param-reassign
      }
    });
  }

  static clearWindow() {
    document.getElementById('cont').innerHTML = '';
    document.getElementById('form').innerHTML = '';
  }

  static createBoard() {
    const gameBoard = document.createElement('div');
    gameBoard.id = 'gameBoard';
    gameBoard.classList.add('board', 'd-flex', 'bg-warning', 'flex-wrap');
    return gameBoard;
  }

  createSqr(board, gameBoard) {
    this.board = board;
    this.board.arrayboard.forEach((box, index) => {
      const sqr = document.createElement('div');
      sqr.id = index;
      sqr.classList.add('sqr');
      gameBoard.appendChild(sqr);
    });
    document.getElementById('cont').appendChild(gameBoard);
  }
}

/* harmony default export */ var dom = (DomMan);

// CONCATENATED MODULE: ./src/gameLogic.js


class GameLogic {


  setCurrentPlayer(player) {
    this.currentPlayer = player;
    return this.currentPlayer
  }

  gameHasWinner(arrayBoard) {
    this.arrayBoard = arrayBoard;
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    return winningCombos.find((combo) => {
      if (this.arrayBoard[combo[0]] !== '' && this.arrayBoard[combo[1]] !== '' && this.arrayBoard[combo[2]] !== '' && this.arrayBoard[combo[0]] === this.arrayBoard[combo[1]] && this.arrayBoard[combo[1]] === this.arrayBoard[combo[2]]) {
        return true;
      }
      return false;
    });
  }

  gamenoWinner(arrayBoard) {
    this.arrayBoard = arrayBoard;
    for (let i = 0; i < this.arrayBoard.length; i += 1) {
      if (this.arrayBoard[i] === '') return false;
    }
    return true;
  }
}

/* harmony default export */ var gameLogic = (GameLogic);



// CONCATENATED MODULE: ./src/factory.js

  const player = (name, marker) => ({ name, marker });

  const gameboard = () => ({
    arrayboard: ['', '', '',
      '', '', '',
      '', '', ''],
  });


/* harmony default export */ var factory = ({player, gameboard});
// CONCATENATED MODULE: ./src/index.js






class src_TicTacToeGame {
  constructor() {
    this.domManipulation = new dom(); // eslint-disable-line no-unused-vars
    this.gameLogicObj = new gameLogic ();
  }

  start(playerX, playerO, board) {
    this.playerX = playerX;
    this.playerO = playerO;
    this.board = board;
    this.currentPlayer = this.gameLogicObj.setCurrentPlayer(this.playerX);
    this.drawBoard();
  }


  drawBoard() {
    dom.clearWindow();
    this.domManipulation.displayturn(this.currentPlayer);
    const gameBoard = dom.createBoard();
    gameBoard.addEventListener('click', this.squareClick.bind(this));
    this.domManipulation.createSqr(this.board, gameBoard);
  }

  squareClick(event) {
    this.executeMove(event.target.id);
  }

  executeMove(movement) {
    if (this.board.arrayboard[movement] === '' && !this.gameLogicObj.gameHasWinner(this.board.arrayboard)) {
      this.board.arrayboard[movement] = this.currentPlayer.marker;
      this.domManipulation.updateBoard(this.board);
      if (!this.gameLogicObj.gameHasWinner(this.board.arrayboard)) {
        if (this.gameLogicObj.gamenoWinner(this.board.arrayboard)) {
          this.domManipulation.displaytie(this.playerX, this.playerO);
        }
        this.currentPlayer = (this.currentPlayer === this.playerX ? this.playerO : this.playerX);
        this.domManipulation.changeTurn(this.currentPlayer);
      } else {
        this.domManipulation.displayWinner(this.currentPlayer);
      }
    }
  }
}

const run = () => {
  const game = new src_TicTacToeGame();
  const playerX =  factory.player(document.getElementById('nameUserX').value, 'X');
  const playerO = factory.player(document.getElementById('nameUserO').value, 'O');
  const board = factory.gameboard();
  game.start(playerX, playerO, board);
};


const src_button = document.getElementById('init');
src_button.addEventListener('click', () => { run(); });


/***/ })
/******/ ]);