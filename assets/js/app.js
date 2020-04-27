const player = (name, marker) => ({ name, marker });

const gameboard = () => ({
  arrayboard: ['', '', '',
    '', '', '',
    '', '', ''],
});

class TicTacToeGame {
  start(playerX, playerO, board) {
    this.playerX = playerX;
    this.playerO = playerO;
    this.board = board;
    this.currentPlayer = this.playerX;
    this.drawBoard();
  }


  drawBoard() {
    document.getElementById('cont').innerHTML = '';
    document.getElementById('form').innerHTML = '';
    const turnDisplay = document.createElement('div');
    turnDisplay.id = 'turnDisplay';
    turnDisplay.innerHTML = `Your turn ${this.currentPlayer.name}`;
    turnDisplay.classList.add('text-center', 'text-primary', 'font-weight-bold', 'h2', 'pt-4');
    document.getElementById('cont').appendChild(turnDisplay);

    const gameBoard = document.createElement('div');
    gameBoard.id = 'gameBoard';
    gameBoard.classList.add('board', 'd-flex', 'bg-warning', 'flex-wrap');
    gameBoard.addEventListener('click', this.squareClick.bind(this));

    this.board.arrayboard.forEach((box, index) => {
      const sqr = document.createElement('div');
      sqr.id = index;
      sqr.classList.add('sqr');
      gameBoard.appendChild(sqr);
    });
    document.getElementById('cont').appendChild(gameBoard);
  }

  squareClick(event) {
    this.executeMove(event.target.id);
  }

  executeMove(movement) {
    if (this.board.arrayboard[movement] === '' && !this.gameHasWinner()) {
      this.board.arrayboard[movement] = this.currentPlayer.marker;
      this.updateBoard();
      if (!this.gameHasWinner()) {
        if (this.gamenoWinner()) {
          this.displaytie();
        }
        this.currentPlayer = (this.currentPlayer === this.playerX ? this.playerO : this.playerX);
        document.getElementById('turnDisplay').innerHTML = `Your turn ${this.currentPlayer.name}`;
      } else {
        this.displayWinner();
      }
    }
  }

  updateBoard() {
    const gameBoard = document.getElementById('gameBoard');
    const sqr = gameBoard.childNodes;
    sqr.forEach((element, index) => {
      if (element.innerText !== this.board.arrayboard[index]) {
        element.innerText = this.board.arrayboard[index]; // eslint-disable-line no-param-reassign
      }
    });
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

  displayWinner() {
    const message = document.createElement('div');
    message.id = 'message';
    message.classList.add('text-center', 'text-warning', 'font-weight-bold', 'h2', 'pt-4');
    message.innerHTML = ` Congratulations ${this.currentPlayer.name} Win`;
    document.getElementById('turnDisplay').innerHTML = '';
    document.getElementById('cont').appendChild(message);
  }

  displaytie() {
    const message = document.createElement('div');
    message.id = 'message';
    message.classList.add('text-center', 'text-warning', 'font-weight-bold', 'h2', 'pt-4');
    message.innerHTML = `${this.playerX.name} and ${this.playerO.name} it's a tie, play agian`;
    document.getElementById('turnDisplay').innerHTML = '';
    document.getElementById('cont').appendChild(message);
  }
}


function run() {
  const playerX = player(document.getElementById('nameUserX').value, 'X');
  const playerO = player(document.getElementById('nameUserO').value, 'O');
  const board = gameboard();
  const game = new TicTacToeGame();
  game.start(playerX, playerO, board);
}


const button = document.getElementById('init');
button.addEventListener('click', () => { run(); });
