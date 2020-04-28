import DomMan from './dom';

const player = (name, marker) => ({ name, marker });

const gameboard = () => ({
  arrayboard: ['', '', '',
    '', '', '',
    '', '', ''],
});

class TicTacToeGame {
  constructor() {
    this.domManipulation = new DomMan(); // eslint-disable-line no-unused-vars
  }

  start(playerX, playerO, board) {
    this.playerX = playerX;
    this.playerO = playerO;
    this.board = board;
    this.currentPlayer = this.playerX;
    this.drawBoard();
  }


  drawBoard() {
    this.domManipulation.clearWindow();
    this.domManipulation.displayturn(this.currentPlayer);
    const gameBoard = this.domManipulation.createBoard();
    gameBoard.addEventListener('click', this.squareClick.bind(this));
    this.domManipulation.createSqr(this.board, gameBoard);
  }

  squareClick(event) {
    this.executeMove(event.target.id);
  }

  executeMove(movement) {
    if (this.board.arrayboard[movement] === '' && !this.gameHasWinner()) {
      this.board.arrayboard[movement] = this.currentPlayer.marker;
      this.domManipulation.updateBoard(this.board);
      if (!this.gameHasWinner()) {
        if (this.gamenoWinner()) {
          this.domManipulation.displaytie(this.playerX, this.playerO);
        }
        this.currentPlayer = (this.currentPlayer === this.playerX ? this.playerO : this.playerX);
        this.domManipulation.changeTurn(this.currentPlayer);
      } else {
        this.domManipulation.displayWinner(this.currentPlayer);
      }
    }
  }

  gameHasWinner() {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    return winningCombos.find((combo) => {
      if (this.board.arrayboard[combo[0]] !== '' && this.board.arrayboard[combo[1]] !== '' && this.board.arrayboard[combo[2]] !== '' && this.board.arrayboard[combo[0]] === this.board.arrayboard[combo[1]] && this.board.arrayboard[combo[1]] === this.board.arrayboard[combo[2]]) {
        return true;
      }
      return false;
    });
  }

  gamenoWinner() {
    for (let i = 0; i < this.board.arrayboard.length; i += 1) {
      if (this.board.arrayboard[i] === '') return false;
    }
    return true;
  }
}

const run = () => {
  const playerX = player(document.getElementById('nameUserX').value, 'X');
  const playerO = player(document.getElementById('nameUserO').value, 'O');
  const board = gameboard();
  const game = new TicTacToeGame();
  game.start(playerX, playerO, board);
};


const button = document.getElementById('init');
button.addEventListener('click', () => { run(); });
