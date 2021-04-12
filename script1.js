"use strict";
if (4==9)
{
    console.log('True');
}
else 
{
    console.log('False');
} 

const num = 50;
/*
if (num <49)
{
    console.log('Error');
}
else if (num>100)
{
    console.log('Много');
}
else
{console.log('Yeap');} 

(num === 50) ? console.log('Ok') : console.log('not');

switch(num)
{
    case 49: console.log('nope'); break;
    case 50: console.log('yeah'); break;
    default: console.log('0'); break;
}*/
//циклы

let num = 50;
//цикл while
/*while (num<=55)
{
    console.log(num);
    num++;
}*/
//цикл do while
/*do {
    console.log(num);
    num++;
}
while (num<55);
*/
//цикл for
for (let i = 1; i<10; i++)
{
    /*console.log(num);
    num++;*/
    if (i == 6) {//break;
        continue;
    }

    console.log(i);
}