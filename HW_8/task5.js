import chalk from "chalk";

const firstarr=[1,2,3,4,5];
console.log(chalk.bgGreen(`${firstarr}`));
const secarr=[6,7,8,9,10];
console.log(chalk.bgGreen(`${secarr}`));

const newarr= firstarr.concat(secarr);
console.log(chalk.bgRed(`${newarr}`));