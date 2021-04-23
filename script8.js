(function () {"use strict";}());
//dynamic tipization
//1.string
console.log(typeof(String(null)));//transformation null to string 
console.log(typeof(String(4)));
//конкатенация
console.log(typeof(5+''));
const num = 5;
console.log("https://vk.com/catalog/" + num);
//формирование стилей
const fontSize = 26 + 'px';

//2.to number
console.log(typeof(+'6'));

console.log(typeof(parseInt("15px",10)));

let answ = +prompt("Hello", "");
//3. to boolean
//null, undefined,0,'' (без пробела), NaN are always false
//3.1
let switcher = null;

if (switcher) //switcher is false
{console.log('Working...');}

switcher =1;
if (switcher) //now switcher is true
{console.log('Working...');}
//3.2
console.log(typeof(Boolean('4')));
//3.3
console.log(typeof(!!"4"));
