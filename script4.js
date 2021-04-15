//Деструктуризация объекта
const options = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors:{//обЪект в обЪекте
        border: 'black',
        bg: 'red'
    },
    //создание метода в объекте
    makeTest: function()
        {console.log('Тест');}
};
//запуск метода в объекте
options.makeTest();
//деструктуризация объекта
const {border, bg} = options.colors;
console.log(border);
//console.log(options.name);
//console.log(options["colors"]["border"]);
/*delete options.name;
console.log(options);*/
//перебор ключей в объекте
for (let key in options)
{
    console.log(`Свойство ${key}имеет значение ${options[key]}`);
}

/*let counter = 0;
//Перебор всех свойств и ключей объектов
for (let key in options)
{
    if (typeof(options[key]) == 'object')
    {for (let i in options[key])
        {
        console.log(`Свойство ${i}имеет значение ${options[key][i]}`);   
        counter++; //кол-во вхождения в цикл будет равно числу св-в объекта
        }
    }
    else  
        {console.log(`Свойство ${key}имеет значение ${options[key]}`);
        counter++; //кол-во вхождения в цикл будет равно числу св-в объекта
        }
   
} 
console.log(counter);*/ 

console.log(Object.keys(options));
console.log(Object.keys(options).length);