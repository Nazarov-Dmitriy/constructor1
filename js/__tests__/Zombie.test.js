import Zombie from "../Zombie.js";

test('Создание нового персонажа Zombie', () => {
  const result = new Zombie('Zombie', 'Zombie');
  expect(result).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
