(function () {"use strict";}());


let str = "some";
let strObj = new String(str);
console.log(typeof(str));//строка
console.log(typeof(strObj));//объект

console.dir(['1','2','3']);//экземляр прототипа массив 

const soldier = //прототип солдат
{
    health : 400,
    armor: 100,
    sayHello: function()
        {console.log('hello');}
};
//сразу создаем прототип
const john= Object.create(soldier);

//старая запись
/*john.__proto__ = soldier; //установка для объекта john прототип soldier
console.log(john.health);
john.sayHello();
*/
//новая запись
/*
const john =
{
    health : 100
};
Object.setPrototypeOf(john, soldier);*/
console.log(john.health);
john.sayHello();