try{
function divide(numerator,denominator)
{
if(typeof numerator !=="number" || Number.isNaN(numerator))
{
    try{
    return console.log("numerator in NaN");
    }finally{
    console.log ("Робота завершена");
}
}
else if (typeof denominator !=="number" || Number.isNaN(denominator))
{
    try{
    return console.log("denominaotr is NaN ");
    }finally{
    console.log ("Робота завершена");
}
}
else if (denominator===0)
{
    try{
    return console.log("cant divide on 0");
    }finally{
    console.log ("Робота завершена");
}
}
else
{
    try{
   return numerator/denominator;
    }finally{
    console.log ("Робота завершена");
}
}
}
 
console.log(divide(1,8));  //denominator is first
}
finally{
    console.log ("Робота завершена");
}


