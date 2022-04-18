import Bowerman from "../Bowerman.js";

test('Создание нового персонажа Bowerman', () => {
  const result = new Bowerman('Bowerman', 'Bowman');
  expect(result).toEqual({
    name: 'Bowerman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
