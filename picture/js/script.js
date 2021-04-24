const box = document.getElementById('box'),
        btns  = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        oneHeart = document.querySelector('.heart'),
        wrapper = document.querySelector('.wrapper');
//box.style.backgroundColor = 'blue';
//box.style.width = '500px';
btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';
box.style.cssText = 'background-color: blue; width:500px';

/*for (let i = 0; i<hearts.length; i++)
{
        hearts[i]
}*/
hearts.forEach(items => {items.style.backgroundColor = 'blue';});
const div = document.createElement('div');
//const text = document.createTextNode('тут был я');

div.classList.add('black');
document.body.append(div);
wrapper.append(div);//в конце родителя
//wrapper.prepend(div);// в начале родителя
//hearts[0].before(div);
//hearts[0].after(div);
//circles[0].remove();
 //hearts[0].replaceWith(circles[0]);

//устаревшие методы
//wrapper.appendChild(div);
//wrapper.insertBefore(div.hearts[0]);
//wrapper.removeChild(hearts[1]);
//wrapper.replaceChild(hearts[0], circles[1]);
//div.innerHTML="hello,Olga";//прописание текста/html-кода в эл
div.innerHTML = "<h1>Hello, Olga1</h1>";
//div.textContent = "hello";

div.insertAdjacentHTML("beforebegin","<h2>HI</h2>");
div.insertAdjacentHTML("before","<h2>HI</h2>");

//div.insertAdjacentHTML("afterbegin","<h2>HI</h2>");