
import './style.css';
//import { addToSchedule,myFormDivs } from "./addDiv";


function addToScheduleMid(a, b, c) {
    //const parentDiv1 = document.querySelector('.tasks');
    //parentDiv1.style.display = 'none';

    const parentDiv1 = document.querySelector('.tasks1');

    const subDiv = document.createElement('div');
    subDiv.innerHTML = '';

    const p1 = document.createElement('p');
    p1.textContent = a;
    //p1.classList.add('title');

    const p2 = document.createElement('p');
    p2.textContent = b;
    //p1.classList.add('title');

    const p3 = document.createElement('p');
    p3.textContent = c;
    //p1.classList.add('title');

    
    subDiv.append(p1,p2,p3);

    subDiv.classList.add('addDivs');
    console.log(subDiv.textContent);

    parentDiv1.append(subDiv);
    parentDiv1.classList.add('mainContents');
    console.log(parentDiv1.textContent);


}



function myFormDivsMid(){

    const myForm = document.querySelector('#myForm')

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const titl = document.querySelector("#title").value;
        const todo = document.querySelector("#todo").value;
        const date = document.querySelector("#date").value;

        addToScheduleMid(titl, todo, date);
        //myForm.style.display = 'none';
        
        
    });   
}




function midEvents() {
    const addEvents = document.querySelector('#addEvents');
    const myForm = document.querySelector('#myForm');

    addEvents.addEventListener('click', ()=> {
        myForm.style.display = 'block';
        myFormDivsMid();
        
    });
}

export{midEvents};