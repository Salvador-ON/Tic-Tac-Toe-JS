import DomMan from './dom';
import GameLogic from './gameLogic';
import factory from './factory';


class TicTacToeGame {
  constructor() {
    this.domManipulation = new DomMan(); // eslint-disable-line no-unused-vars
    this.gameLogicObj = new GameLogic();
  }

  start(playerX, playerO, board) {
    this.playerX = playerX;
    this.playerO = playerO;
    this.board = board;
    this.currentPlayer = this.gameLogicObj.setCurrentPlayer(this.playerX);
    this.drawBoard();
  }


  drawBoard() {
    DomMan.clearWindow();
    this.domManipulation.displayturn(this.currentPlayer);
    const gameBoard = DomMan.createBoard();
    gameBoard.addEventListener('click', this.squareClick.bind(this));
    this.domManipulation.createSqr(this.board, gameBoard);
  }

  squareClick(event) {
    const movement = event.target.id;
    if (this.board.arrayboard[movement] === '' && !this.gameLogicObj.gameHasWinner(this.board.arrayboard)) {
      this.gameLogicObj.executeMove(movement, this.board.arrayboard, this.currentPlayer);
      this.domManipulation.updateBoard(this.board);
      this.checkWinner();
    }
  }

  checkWinner() {
    if (!this.gameLogicObj.gameHasWinner(this.board.arrayboard)) {
      if (this.gameLogicObj.gamenoWinner(this.board.arrayboard)) {
        this.domManipulation.displaytie(this.playerX, this.playerO);
      }
      this.currentPlayer = this.gameLogicObj.swap(this.currentPlayer, this.playerX, this.playerO);
      this.domManipulation.changeTurn(this.currentPlayer);
    } else {
      this.domManipulation.displayWinner(this.currentPlayer);
    }
  }
}

const run = () => {
  const game = new TicTacToeGame();
  const playerX = factory.player(document.getElementById('nameUserX').value, 'X');
  const playerO = factory.player(document.getElementById('nameUserO').value, 'O');
  const board = factory.gameboard();
  game.start(playerX, playerO, board);
};


const button = document.getElementById('init');
button.addEventListener('click', () => { run(); });
