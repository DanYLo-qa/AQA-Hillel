import chalk from "chalk";

const arr =[1,2,3,4,5,6,7,8,9,10]
console.log(chalk.bgGreen(`${arr}`));

const newarr= arr.filter((numbers) =>numbers%2 ===0 );
console.log(chalk.bgRed(`${newarr}`));
