const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

console.log(`Масив: ${numbers}`);

let positiveCount=0;
let negativeCount=0;
let zeroCount=0;


for(let i=0; i<numbers.length+1; i++){
    i= numbers.filter((number) => number > 0);
    positiveCount=i;
    console.log(`Кількість позитивнтх чисел: ${positiveCount.length}`);
}

for(let i=0; i<numbers.length+1; i++){
    i= numbers.filter((number) => number < 0);
    negativeCount=i;
    console.log(`Кількість негативних чисел: ${negativeCount.length}`);
}

for(let i=0; i<numbers.length+1; i++){
    i= numbers.filter((number) => number == 0);
    zeroCount=i;
    console.log(`кількість нулів: ${zeroCount.length}`);
}

//поясніть чому коли я зіміняю 2 елемент з 0, як в прикладі на 1 то 3 for ламаєтсья і стає нескінченним :(