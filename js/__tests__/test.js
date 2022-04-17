import Bowerman from "../Bowerman.js";
import Daemon from "../Daemon.js";
import Magician from "../Magician.js";
import Undead from "../Undead.js";
import Zombie from "../Zombie.js";
import Swordsman from "../Swordsman.js";

test('Bowerman class', () => {
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

test('Daemon class', () => {
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

test('Magician class', () => {
  const result = new Magician('Magician', 'Magician');
  expect(result).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Undead class', () => {
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

test('Zombie class', () => {
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

test('Swordsman class', () => {
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