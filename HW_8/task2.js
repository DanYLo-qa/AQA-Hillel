import chalk from "chalk";


const arr =[1,2,3,4,5];
console.log(chalk.bgGreen(`${arr}`));

const mutant = arr.map((numbers, index) => numbers*index );
console.log(chalk.bgRed(`${mutant}`));