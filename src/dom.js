
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

  clearWindow() {
    document.getElementById('cont').innerHTML = '';
    document.getElementById('form').innerHTML = '';
  }

  createBoard() {
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

export default DomMan;
