'use strict';

const btn = document.querySelector("button");
//старый метод
/*btn.onclick = function()
        {alert('click');};*/

/*btn.addEventListener('click',
()=>{alert('click');});
btn.addEventListener('click',
()=>{alert('click2');});
btn.addEventListener('mouseenter',(event)=>
            {console.log(event.target);//console.log('click3');
            event.target.remove();
        });*/
let i = 0;
const overlay = document.querySelector(".overlay");
const deleteElement = (event)=>{
                console.log(event.target);
                //console.log(event.currentTarget);
                console.log(event.type);
                /*i++;
                if (i == 1) 
                {
                btn.removeEventListener('click', deleteElement);
                }*/
        };
btn.addEventListener('click', deleteElement,{once:true});
overlay.addEventListener('click', deleteElement);
//отмена стандартного поведения в браузере
const link = document.querySelector('a'),
        btns = document.querySelectorAll('btn');
link.addEventListener('click',(ev)=>
                        { 
                        ev.preventDefault();//отмена перехода по ссылке 
                        console.log(ev.target);                          
                        });
//навешием событие сразу на несколько элов
btns.forEach(item =>
        {
                item.addEventListener('click', deleteElement);     
        });
                
