class TicTacToeGame {

  player = (name, marker) => {
    return { name, marker };
  }

  board = () => {
    return {
      arrayboard: ["", "", "",
        "", "", "",
        "", "", ""]
    }
  }

  set = () => {
    this.playerX = this.player(document.getElementById('nameUserX').value, "X");
    this.playerO = this.player(document.getElementById('nameUserO').value, "O");
    this.start();
  }

  start = () => {
    this.board = this.board();
    this.currentPlayer = this.playerX;
    this.drawBoard();
  }

  drawBoard = () => {
    document.getElementById("cont").innerHTML = "";
    document.getElementById("form").innerHTML = "";
    let gameBoard = document.createElement('div');
    gameBoard.id = 'gameBoard';
    gameBoard.classList.add('board', 'd-flex', 'bg-warning', 'flex-wrap');
    gameBoard.addEventListener('click', this.squareClick.bind(this))

    this.board.arrayboard.forEach((box, index) => {
      let sqr = document.createElement('div');
      sqr.id = index;
      sqr.classList.add('sqr');
      gameBoard.appendChild(sqr);
    });
    document.getElementById("cont").appendChild(gameBoard);
  }

  squareClick = (event) => {
    this.executeMove(event.target.id);

  }

  executeMove = (moveIndex) => {
    if (this.board.arrayboard[moveIndex] == "") {
      this.board.arrayboard[moveIndex] = this.currentPlayer.marker;
      this.updateBoard();
      this.currentPlayer = (this.currentPlayer == this.playerX ? this.playerO : this.playerX);
    }
  }

  updateBoard = () => {
    console.log(this.board.arrayboard)
    let gameBoard = document.getElementById('gameBoard');
    let sqr = gameBoard.childNodes;
    sqr.forEach((element, index) => {
      if (element.innerText != this.board.arrayboard[index]) {
        element.innerText = this.board.arrayboard[index];
      }
    })
  }
}


game = new TicTacToeGame();
