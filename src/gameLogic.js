
class GameLogic {
  setCurrentPlayer(player) {
    this.currentPlayer = player;
    return this.currentPlayer;
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

  swap(currentPlayer, playerX, playerO) {
    this.currentPlayer = currentPlayer;
    this.playerX = playerX;
    this.playerO = playerO;
    const swapPlayer = (this.currentPlayer === this.playerX ? this.playerO : this.playerX);
    return swapPlayer;
  }

  executeMove(movement, board, player ) {
    board[movement] = player.marker;
  }
}

export default GameLogic;

// module.exports = GameLogic;
