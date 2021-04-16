(function () {"use strict";}());

let a = 5,
    b = a;

b =  b + 5;
console.log(b);
console.log(a);

const obj = {
        a : 5,
        b:1
};

/*const copy = obj;//передача ссылки на объект, но не копии
copy.a = 10;*/

console.log(copy);
console.log(obj);
//копирование объекта через цикл
function copy(mainObj)
{
    let objCopy ={};
    let key;
    for (key in mainObj)
        {
            objCopy[key] = mainObj[key];
        }
    return objCopy;
}

const numbers = 
    {
        a: 2,
        b: 5,
        c: {x:7, y:9}
    };
const newNumbers = copy(numbers);//вызов функции копирование объекта через цикл    

newNumbers.a = 10;//замена 
console.log(newNumbers);


const add = {
    d:17,
    e:20
};
//console.log(Object.assign(numbers, add));
console.log(Object.assign({}, add));
//копирование объекта (не ссылка)
const clone = Object.assign({}, add);
clone.d = 20;
console.log( add);
console.log(clone);
//копирование массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray;//не копия, а только ссылка на объект
const newNewArray = oldArray.slice();

newNewArray[1] = 'fjksdfjds';
console.log(oldArray);
console.log(newNewArray);

//разворот
const video = ['youtube', 'vimeo','rutube'],
        blogs = ['worpress', 'livejournal', 'blogger'],
        internet = [...video,...blogs, 'facebool'];
console.log(internet);


function log(a, b, c)
{
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);
//копирование массива с пом спреда
const array = ["a", "b"];

const newAarray = [...array];
//копирование объекта с пом спреда
const q = { one : 1, two : 2};
const q1 = {...q};
console.log(q1);
