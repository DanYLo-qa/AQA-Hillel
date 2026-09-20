import chalk from "chalk";

const arr =[10,20,30,40,50];
console.log(chalk.green(`${arr}`));


const sum = arr.reduce((a,cv) => a+cv, 0 );
console.log(chalk.magenta(`${sum}`));