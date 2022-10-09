const sh = require('superheroes');
const sv = require('supervillains');

const superhero = sh.random();
const supervillain = sv.random();

console.log(
    `todays hero is ${superhero} and todays villain is ${supervillain}\nthe battle seems though, but a the and ${superhero} wins the battle.`
);
