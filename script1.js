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
*/
switch(num)
{
    case 49: console.log('nope'); break;
    case 50: console.log('yeah'); break;
    default: console.log('0'); break;
}