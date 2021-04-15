(function () {"use strict";}());
//массивы и псевдомассивы
const arr = [1, 2, 3, 6, 8];
/*
//индекс при length
arr[99] = 0;
console.log(arr.length);
console.log(arr);*/
//arr.pop();
/*

//добавление элеменат в конец массива
arr.push(13);
console.log(arr);

//Перебор элементов массива через метод forEach и циклы
arr.forEach(function(item, i, arr)
{
    console.log(`${i}: ${item} внутри массива ${arr}`);
});
for (let i = 0; i<arr.length; i++)
{console.log(arr[i]);}

for (let value of arr)
{
    console.log(value);
}
*/
//формирование массива на соновании строки
const str = prompt("","");
const products = str.split(", ");
//console.log(products);
products.sort(compareNum);
//callback функция по сравнению чисел
function compareNum(a, b)
{
    return a-b;
}
console.log(products.join("; "));