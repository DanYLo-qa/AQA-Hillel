import chalk from "chalk";

function area1 (h=10,w=5)
{
    let dec=0;
    return dec = h*w; 
}

console.log(chalk.bgGreen(` ${area1()} `));

const area2 = function(h=20,w=2)
{
    let dec2=0;
    return dec2=h*w;
}

console.log(chalk.bgYellow(` ${area2()} `));

const area3 = (h=30,w=3) => h*w;

console.log(chalk.bgCyan(` ${area3()} `));