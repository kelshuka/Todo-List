
import './style.css';
import { addToSchedule,myFormDivs } from "./addDiv";



function highEvents() {
    const addEvents = document.querySelector('#addEvents');
    const myForm = document.querySelector('#myForm');

    addEvents.addEventListener('click', ()=> {
        myForm.style.display = 'block';
        myFormDivs();
        
    });
}

export{highEvents};