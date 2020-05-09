import factory from '../factory';

const firstPlayer = factory.player('mohamed', 'X');
const secondPlayer = factory.player('Salvador', 'O');

test('validate correct players name ', () => {
  expect(firstPlayer.name).toBe('mohamed');
  expect(secondPlayer.name).toBe('Salvador');
});

test('Validate Wrong players name ', () => {
  expect(firstPlayer.name).not.toBe('mohamedssa');
  expect(secondPlayer.name).not.toBe('Salvadorsas');
});

test('check validate players marks', () => {
  expect(firstPlayer.marker).toBe('X');
  expect(firstPlayer.marker).not.toBe('O');
  expect(secondPlayer.marker).toBe('O');
  expect(firstPlayer.marker).not.toBe(secondPlayer.marker);
});

test('Check Wrong Players Marks', () => {
  expect(firstPlayer.marker).not.toBe('O');
  expect(secondPlayer.marker).not.toBe('X');
});
