(function(){"use strict";}());
//теория функции
let num = 20;
function showFirstMessage(text)
{
    console.log(text);
    let  num = 10;
}
showFirstMessage('hello');
console.log(num);

function calc(a, b)
{
    return(a+b);
}

console.log(calc(4,3));
console.log(calc(5,6));
//function declaration
function ret()
{
    let num = 50;
    return num;
}

const anotherNum = num;
console.log(anotherNum);

//function expression
const logger = function()
{console.log('Hello');};
logger();

const calc1 = (a,b) => {return a+b};