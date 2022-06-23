'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // all is the key part here// works like an array because there are multiple buttons
const modalClass = modal.classList;
const overlayClass = overlay.classList;

console.log(btnsOpenModal);

const OpenModal = function () { // with a function expression the function can only be invoked after the function expression lexically
    console.log('Button clicked'); 
    modalClass.remove('hidden'); // the . for the hidden class is not needed with the remove class method
    overlayClass.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)  // like an if else statement , no brackets are needed if only one argument is being called
    btnsOpenModal[i].addEventListener('click', OpenModal) // the line directly after the loop is the one that is included 
    
    const closeModal = function() { // function expression saved to variable
        modalClass.add('hidden');
        overlayClass.add('hidden');
    }
    
    btnCloseModal.addEventListener('click', closeModal) // easier to add to event listener
    overlay.addEventListener('click', closeModal)

    // Keyboard events are global events
    document.addEventListener('keydown', function(e) {// for thease we usually listen on the whole document
        console.log(e.key);

        if(e.key === 'Escape' && !modal.classList.contains) // no brackets needed for the if statreent with only one argument
         closeModal()
    }); 
   