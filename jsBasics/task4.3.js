import chalk from 'chalk';

const rad =16;
const h =50;
const pi=Math.PI;

const rad1 = 15.8;
const h1=68.15;

console.log (`radius = ${rad}`);
console.log (`height =${h}`);
console.log (`radius 2 = ${rad1}`);
console.log (`height 2 = ${h1}`);
console.log (`PI = ${pi}`);

let S = pi* (rad**2) * h;
let Sr= +S.toFixed(2);
console.log (Sr);

console.log (`fractional numbers`);
let a1 = rad1**2;
let a1r= +a1.toFixed(2);
console.log (a1r);

let S1 = pi* (a1r**2) * h1;
let S1r= +S1.toFixed(2);
console.log (S1r);

console.log(chalk.blue(`integers -`)+chalk.bgGreen(`${Sr}`)+`,`+ chalk.blue(`fractional numbers-`)+chalk.bgGreen(`${S1r}`));