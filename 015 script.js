/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. К любой строке можно обратиться как str.length
и получить ее длину

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

(function () {'use strict';}());

// Код возьмите из предыдущего домашнего задания
const numberOfFilms = prompt("Сколько фильмов вы уже смотрели?",'');

const personalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors: {},
        genres: [],
        privat: false
};

/*for (let i=0; i<2; i++)//выполняем по тому кол-ву,сколько раз необходимо задать вопрос =2
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
*/
/*let i = 0
while (i < 2)
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
    i++;
}*/
let i = 0;
do {
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
    i++;
}
while (i<2)

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
