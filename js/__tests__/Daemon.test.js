import Daemon from "../Daemon.js";

test('Создание нового персонажа Daemon', () => {
  const result = new Daemon('Daemon', 'Daemon');
  expect(result).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
