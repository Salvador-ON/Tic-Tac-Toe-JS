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
  }






}


game = new TicTacToeGame();
