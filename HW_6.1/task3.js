import chalk from "chalk";

function checkOrder (available =50, ordered=-1)
{
    if (ordered>available)
    {
       return"Your order is too large, we dont have enough goods.";
    } 
    else if (ordered<1)
    {
        return"Your order is empty";
    } 
    else 
    {
       return "Your order is accepted";
    }
   
}

console.log(chalk.bgGreen(`${checkOrder()}`));