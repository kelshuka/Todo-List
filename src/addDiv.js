
import './style.css';

function addToSchedule(...args) {
    const parentDiv = document.querySelector('.tasks');
    //parentDiv.innerHTML = '';

    const subDiv = document.createElement('div');
    subDiv.innerHTML = '';

    let i=0;
    while (i < args.length ) {
        for (i of args ) {
            const contents = document.createElement('div');
            contents.textContent = i;

            subDiv.append(contents);
        }

        i++;
    }

    subDiv.classList.add('addDivs');

    parentDiv.appendChild(subDiv);

}


function myFormDivs(){

    const myForm = document.querySelector('#myForm')

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const titl = document.querySelector("#title").value;
        const todo = document.querySelector("#todo").value;
        const date = document.querySelector("#date").value;
    
       
        //let fer2 = addBookToLibrary(titl, auth, nuM);
        //console.log(fer2);
        //appendToCard(fer2);

        addToSchedule(titl, todo, date);
        myForm.style.display = 'none';
        

        
        //myLibrary.splice(0, myLibrary.length);
        
        
    });   
}

export{addToSchedule, myFormDivs};