'use strict';
//создаем вместилище информации
//получение элов со странцы 1
const box = document.getElementById('box');//объект,в который хочу получить элемент со страницы
console.log(box);//данный код существует только внутри браузера!

//получение элов со странцы 2 - теги
const btns = document.getElementsByTagName('button');
console.log(btns);//получим псевдомассив
//получение конкретного элемента - способ 1
const btns1 = document.getElementsByTagName('button')[1];
console.log(btns1);
//получение конкретного элемента - способ 2
const btns2 = document.getElementsByTagName('button');
console.log(btns2[1]);
//все элы через определенный класс
const circles = document.getElementsByClassName('circle');
console.log('circles');
//css-селектор
const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item=>//item =  элемент массива, в который получаем элементы из псевдомассива hearts
    {console.log(item);});

const oneHeart = document.querySelector('div');  
//в перую oneHeart попадёт первая переменная из массива 
console.log(oneHeart); 