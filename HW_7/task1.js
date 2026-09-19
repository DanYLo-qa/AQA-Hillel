
function evenTxt()
{
  return `number is even`;
}

function oddTxt () 
{
  return `number is odd`;
}


function handeNum(a,even,odd) {
    if(a % 2 === 0){
        return even();
    }else
    {
        return odd();
    }

}

console.log(handeNum(2,evenTxt,oddTxt));
console.log(handeNum(3,evenTxt,oddTxt));