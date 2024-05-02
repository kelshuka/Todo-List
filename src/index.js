
import './style.css';
import { highEvents } from './highEvents';
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

navs.forEach((i) => {
    i.addEventListener('click', ()=> {
        addEvents.style.display = 'block';
    
    });
});

document.getElementById('highP').addEventListener('click', (e)=> {  
    //const parentDiv = document.querySelector('.tasks');
    //parentDiv.innerHTML = ''; 
    highEvents();   
});

document.getElementById('midP').addEventListener('click', (e)=> {   
    midEvents();   
});




