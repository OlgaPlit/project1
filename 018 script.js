/* Задание на урок

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

(function () {'use strict';}());

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

function start()
{
    numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?",'');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))
    {
        numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?",'');
    }
}
//start();
const personalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors: {},
        genres: [],
        privat: false
};

function rememberMyFilms()
{
    for (let i=0; i<2; i++)//выполняем по тому кол-ву,сколько раз необходимо задать вопрос =2
    {
        const a = prompt('Один из последних просмотренных фильмов',''),
                b = prompt('На сколько оцените его?','');
                if (a != null && b != null && a!='' && b!='' && a.length <50 && b.length<50)
                {
                personalMovieDB.movies[a] = b;
                console.log('cool');
                }        
                else 
                {
                    console.log('error');
                    i--; 
                }
    }
}

//rememberMyFilms();


function detectPersonalLevel()
{
    if (personalMovieDB.count<10) 
    {
        console.log('мало фильмов');
    }
    else if (personalMovieDB >= 10 && personalMovieDB <30)
    {
        console.log('классика');
    }
    else if (personalMovieDB >= 30)
    { console.log('киноман');}
    else
    {console.log('ошибка');}
}

//detectPersonalLevel();

function showMyDB()
{
    if (personalMovieDB.privat == false)//возможен вариант !personalmovieDb
        {
        console.log(personalMovieDB);   
        }
}
//showMyDB();

function writeYourGenres()
{   let i = 0;
    while (i < 3)// можно циклом for (let i=1, i<=3,i++)
    //при цикле for запись в массив идет [i-1]
    {
        const vopr = prompt(`Ваш любимый жанр под номером ${i+1}`,"");
        personalMovieDB.genres[i] = vopr;
        
        i++;
    }
    console.log(personalMovieDB);
}
writeYourGenres();