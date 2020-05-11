import gameLogic from '../gameLogic';

const gameLocigObj = new gameLogic();

const playerX = {
  name: 'Salvador',
  marker: 'X',
};

const playerO = {
  name: 'Mohamed',
  marker: 'O',
};

const gambeboard = {
  board: ['', '', '',
    '', '', '',
    '', '', ''],
};
const currentPlayer = gameLocigObj.setCurrentPlayer(playerX);

test('set currentplayers name Salvador', () => {
  expect(currentPlayer.name).toBe('Salvador');
  expect(currentPlayer.marker).toBe('X');
});

test('set currentplayers mark X', () => {
  expect(currentPlayer.marker).toBe('X');
});

test('game has a winner', () => {
  gambeboard.board = ['X', 'X', 'X',
    'O', '', '',
    '', 'O', ''];

  expect(gameLocigObj.gameHasWinner(gambeboard.board)).not.toBeUndefined();
});

test('game with out winning combination', () => {
  gambeboard.board = ['X', 'O', 'X',
    'X', 'O', 'X',
    'O', 'X', 'O'];
  expect(gameLocigObj.gameHasWinner(gambeboard.board)).toBeUndefined();
});

test('game is not a tie', () => {
  gambeboard.board = ['X', 'X', 'X',
    'O', '', '',
    '', 'O', ''];

  expect(gameLocigObj.gameHasWinner(gambeboard.board)).not.toBeUndefined();
});

test('game is a tie', () => {
  gambeboard.board = ['X', 'O', 'X',
    'X', 'O', 'X',
    'O', 'X', 'O'];
  expect(gameLocigObj.gamenoWinner(gambeboard.board)).toBe(true);
});

test('game can continue there are space to play', () => {
  gambeboard.board = ['X', 'O', 'X',
    '', '', 'X',
    'X', 'X', 'O'];
  expect(gameLocigObj.gamenoWinner(gambeboard.board)).toBe(false);
});


test('correct swap player Salvador To Mohamed', () => {
  expect(gameLocigObj.swap(playerX, playerX, playerO)).toBe(playerO);
});


test('incorrect swap player Salvador To Salvador', () => {
  gambeboard.board = ['X', 'O', 'X',
    '', '', 'X',
    'X', 'X', 'O'];
  expect(gameLocigObj.swap(playerX, playerX, playerO)).not.toBe(playerX);
});
