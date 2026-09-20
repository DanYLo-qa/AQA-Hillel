
const arr=[1,5,500,89,8,15,20,78];
console.log(`${arr}`);

const secArr = arr.slice(0);

function compare (a,b){
    return a-b;
}
secArr.sort();
secArr.sort(compare);
console.log(`${secArr}`);
