
function N(num){
 if(num<=0)
 {
    return;
 }
 console.log(num);

 N(num-1)

}

N(10)