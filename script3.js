(function () {"use strict";}())
//Методы и свойства
const str = "test";
//console.log(str.length);
const mas = [1, 2, 3];
//console.log(mas.length);
// console.log(str[2] = 'd');//так замены буквы в строке не произойдет, нужно исп-ть метод!
console.log(str);
console.log(str.toUpperCase()); 
console.log(str.toLowerCase()); 
const fruit  = "Some fruit";
console.log(fruit.indexOf("fruit"));//поиск позиции

const logg = "Hello world!";
console.log(logg.slice(6,11));
console.log(logg.slice(-5,-1));

console.log(logg.substring(6,11));
console.log(logg.substr(6,2));
//Методы для строк
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

//callback-функции
function learnJs(lang, callback)
{
    console.log(`я учу ${lang}`);
    callback();
}

learnJs('Javascript', function()
{
    console.log('я всё');
});

