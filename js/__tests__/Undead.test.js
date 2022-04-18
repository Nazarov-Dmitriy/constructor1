import Undead from "../Undead.js";

test('Создание нового персонажа Undead', () => {
  const result = new Undead('Undead', 'Undead');
  expect(result).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
