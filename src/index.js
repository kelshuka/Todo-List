
import './style.css';
import { highEvents, showDataBase } from './highEvents';
import { midEvents } from './midEvents';
import { addToSchedule,myFormDivs } from "./addDiv";


const container = document.querySelector('.container');
container.classList.add('containerMain');

const heaDing = document.querySelector('.heaDing');
heaDing.classList.add('header');

const sideBar = document.querySelector('.sideBar');
sideBar.classList.add('sidebar');
//sideBar.classList.add('buttns');

const content = document.querySelector('#content');
content.classList.add('mainBar');

const addEvents = document.querySelector('#addEvents');

const navs = document.querySelectorAll('nav');
const parentDiv = document.querySelector('.tasks');

navs.forEach((i) => {
    i.addEventListener('click', ()=> {
        addEvents.style.display = 'block';
        highEvents();
        parentDiv.innerHTML = '';
        
    
    });
});


showDataBase();




