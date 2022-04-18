import Swordsman from "../Swordsman.js";

test('Создание нового персонажа Swordsman', () => {
  const result = new Swordsman('Swordsman', 'Swordsman');
  expect(result).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});