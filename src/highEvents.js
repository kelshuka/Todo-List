
import './style.css';
import { addToSchedule,myFormDivs } from "./addDiv";


//to store data locally
const parentDiv = document.querySelector('.tasks');

function dataStorage(){
    localStorage.setItem("data",parentDiv.innerHTML)
}


function highEvents() {
    const addEvents = document.querySelector('#addEvents');
    const myForm = document.querySelector('#myForm');

    addEvents.addEventListener('click', ()=> {
        myForm.style.display = 'block';
        myFormDivs();
        
    });
    dataStorage()
}


function showDataBase(){
    parentDiv.innerHTML = localStorage.getItem("data")
}

export{highEvents, showDataBase};