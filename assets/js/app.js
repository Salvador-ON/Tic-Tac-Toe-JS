class TicTacToeGame {

  set() {
    this.playerX = this.player(document.getElementById('nameUserX').value, "X");
    this.playerO = this.player(document.getElementById('nameUserO').value, "O");
    this.start();
  }

  player = (name, marker) => {
    return { name, marker };
  }

  board = () => {
    return {
      board: ["", "", "",
        "", "", "",
        "", "", ""]
    }
  }

  start() {
    this.board = this.board();
    this.currentPlayer = this.playerX;
    this.drawBoard();
  }

  drawBoard() {
    document.getElementById("cont").innerHTML = "";
    document.getElementById("form").innerHTML = "";
    let gameBoard = document.createElement('div');
    gameBoard.id = 'gameBoard';
    gameBoard.classList.add('board', 'd-flex', 'bg-warning', 'flex-wrap');
    gameBoard.addEventListener('click', this.handleSquareClick.bind(this))

    this.board.board.forEach((squre, index) => {
      let sqr = document.createElement('div');
      sqr.id = index;
      sqr.classList.add('sqr');
      gameBoard.appendChild(sqr);
    });
    document.getElementById("cont").appendChild(gameBoard);
  }


  
 




}


game = new TicTacToeGame();
