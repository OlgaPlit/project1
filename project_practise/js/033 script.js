/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

//'use strict';
document.addEventListener('DOMContentLoaded', function(){
// Возьмите свой код из предыдущей практики
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
        
promoGenre[0].outerText = 'Драма';
promoGenre[0].textContent = 'Драма';

const deleteAdv = (arr) => {arr.forEach(function(item) {item.remove();});};
deleteAdv(promo1);
//третий пункт
promoBg.style.backgroundImage = "url(img/bg.jpg)";//прописываем css-свойство url
//четвертый пункт
const makeChanges = () =>
            {
            promoGenre[0].textContent = 'Драма';
            promoBg.style.backgroundImage = "url(img/bg.jpg)";
            };
makeChanges();
const   addForm = document.querySelector("form.add"),
        addInput = addForm.querySelector(".adding__input"),
        checkBox = addForm.querySelector('[type="checkbox"]');
addForm.addEventListener('submit',(event)=>
            {   
                event.preventDefault();//отмена перезагрузки страницы (станд.поведение)
                let newFilm = addInput.value;//значение, которое введено в поле
                const favourite = checkBox.checked;
                if (newFilm)
                { 
                    if (newFilm.length>21) 
                    {newFilm = `${newFilm.substring(0,22)}...`;}
                if (favourite)   
                {
                    console.log('Добавляем любимый фильм');
                } 
                movieDB.movies.push(newFilm);
                
                sortArr(movieDB.movies);//movieDB.movies.sort();
                
                createMovieList(movieDB.movies, promoList);
                //console.log(promoList);
                }
                event.target.reset();
            }
        );
//movieDB.movies.sort();//пятый пункт, сортировка по алфавиту
        //console.log(promoBg.innerHTML); 
const sortArr = (arr) =>
                {   
                arr.sort(); 
                //alert(11); 
                };
//sortArr(movieDB.movies);
function createMovieList(films, parents)
        {
            parents.innerHTML = ' ';
            sortArr(films);
            films.forEach((film,i)=>{
            parents.innerHTML +=  
                    `<li class="promo__interactive-item"> ${i+1} ${film}
                        <div class="delete"></div>
                    </li>`;
            //a = a + 1; a+=1;
            //a = a +'aaa'; a+='aaa';
            });
            
            document.querySelectorAll(".delete").forEach((btn,i)=>{//btn = document.querySelector(".delete")
                            btn.addEventListener('click',()=>
                                        {
                                        btn.parentElement.remove();
                                        movieDB.movies.splice(i,1); 
                                        createMovieList(films,parents);//createMovieList(movieDB.movies, promoList);
                                        });
                        });
        }   
createMovieList(movieDB.movies, promoList);     

});
