import chalk from 'chalk';

const num=5;


console.log(chalk.bgGreen('Цикл for'));

for (let i=0; i<=10; i++)
{
    let a = num*i
    console.log(`${num} x ${i} = ${a} `);
}
console.log(chalk.bgGreen('\n Цикл while'));

let b=0
while (b<=10)
{
    let sum = num * b;
    console.log(`${num} x ${b} = ${sum}`);
    b++;
}