
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

//navs.forEach((i) => {
 //   i.addEventListener('click', ()=> {
 //       addEvents.style.display = 'block';
    
 //   });
//});

const parentDiv = document.querySelector('.tasks');
const parentDiv1 = document.querySelector('.tasks1');
const parentDiv2 = document.querySelector('.tasks2');

document.getElementById('highP').addEventListener('click', (e)=> {  
    parentDiv1.style.display = 'none'; 
    parentDiv2.style.display = 'none'; 
    addEvents.style.display = 'block';
    highEvents();   
});


document.getElementById('midP').addEventListener('click', (e)=> {  
    parentDiv.style.display = 'none'; 
    parentDiv2.style.display = 'none'; 
    addEvents.style.display = 'block';
    midEvents();   
});




