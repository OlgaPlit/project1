/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//первый пункт
const promo = document.querySelector('.promo__adv'),
        promo1 = document.querySelectorAll('.promo__adv img'),
        promoGenre = document.querySelectorAll('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        promoList = document.querySelector('.promo__interactive-list'),
        promoFilm = promoList.querySelectorAll('.promo__interactive-item');
        /*способо получения подкласса из класс
        poster = document.querySelector('.promo__bg'),//главный класс
        genre = poster.querySelector('.promo__genre');//его подкласс
        */
//первый пункт
//promo.remove();
//promo1.forEach(item=>{item.remove();});//стрелочная функция
promo1.forEach(function(item) {item.remove();});
//второй пункт
promoGenre[0].outerText = 'Драма';
promoGenre[0].textContent = 'Драма';
//третий пункт
promoBg.style.backgroundImage = "url(img/bg.jpg)";//прописываем css-свойство url
//четвертый пункт
promoList.innerHTML = ' ';
//promoFilm.forEach(function(item1) {item1.remove();});//сама сделала,тоже работает
movieDB.movies.sort();//пятый пункт, сортировка по алфавиту
console.log(promoBg.innerHTML); 
movieDB.movies.forEach((film,i)=>{
    promoList.innerHTML +=  
            `<li class="promo__interactive-item"> ${i+1} ${film}
                <div class="delete"></div>
            </li>`;
    //a = a + 1; a+=1;
    //a = a +'aaa'; a+='aaa';
});