const player = (name, marker) => ({ name, marker });

const gameboard = () => ({
  arrayboard: ['', '', '',
    '', '', '',
    '', '', ''],
});

class TicTacToeGame {
  constructor(){
    this.domManipulation = new DomMan();
  }
  start(playerX, playerO, board) {
    this.playerX = playerX;
    this.playerO = playerO;
    this.board = board;
    this.currentPlayer = this.playerX;
    this.drawBoard();
  }


  drawBoard() {
    this.domManipulation.clearWindow()
    this.domManipulation.displayturn(this.currentPlayer)
    const gameBoard = this.domManipulation.createBoard()
    gameBoard.addEventListener('click', this.squareClick.bind(this));
    this.domManipulation.createSqr(this.board,gameBoard);
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
  displayturn(currentPlayer){
    this.currentPlayer = currentPlayer
    const turnDisplay = document.createElement('div');
    turnDisplay.id = 'turnDisplay';
    turnDisplay.innerHTML = `Your turn ${this.currentPlayer.name}`;
    turnDisplay.classList.add('text-center', 'text-primary', 'font-weight-bold', 'h2', 'pt-4');
    document.getElementById('cont').appendChild(turnDisplay);
  }

  changeTurn(currentPlayer){
    this.currentPlayer = currentPlayer;
    document.getElementById('turnDisplay').innerHTML = `Your turn ${this.currentPlayer.name}`;
  }

  updateBoard(board) {
    this.board = board
    const gameBoard = document.getElementById('gameBoard');
    const sqr = gameBoard.childNodes;
    sqr.forEach((element, index) => {
      if (element.innerText !== this.board.arrayboard[index]) {
        element.innerText = this.board.arrayboard[index]; // eslint-disable-line no-param-reassign
      }
    });
  }

  clearWindow(){
    document.getElementById('cont').innerHTML = '';
    document.getElementById('form').innerHTML = '';
  }
  createBoard(){
    const gameBoard = document.createElement('div');
    gameBoard.id = 'gameBoard';
    gameBoard.classList.add('board', 'd-flex', 'bg-warning', 'flex-wrap');
    return gameBoard
  }

  createSqr(board, gameBoard){
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

const run = () => {
  const playerX = player(document.getElementById('nameUserX').value, 'X');
  const playerO = player(document.getElementById('nameUserO').value, 'O');
  const board = gameboard();
  const game = new TicTacToeGame();
  game.start(playerX, playerO, board);
}


const button = document.getElementById('init');
button.addEventListener('click', () => { run(); });
