import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider'; 
import calc from './modules/calc';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {


  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 600000);

    calc()
    tabs()
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2024-06-11');
    cards();
    forms(modalTimerId);
    slider();


   
});





    
     /*      function updateCurrent(index){
            if(index <= 10) {
                current.textContent = `0${index +1}`;
            } else {
                current.textContent = index +1;
            }  
          } */

        /*   function scrollSlide (index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                  slide.classList.remove('hide');
                  slide.classList.add('show');
                } else {
                  slide.classList.remove('show');
                  slide.classList.add('hide');
                }
            });
        }
          scrollSlide(slideIndex);
          
          next.addEventListener('click', ()=> {
            slideIndex++;
            if ( slideIndex >= slides.length) {
                slideIndex = 0;
            }
            scrollSlide(slideIndex);
            updateCurrent(slideIndex);
            });

         prev.addEventListener('click', ()=> {
            slideIndex--;
            if ( slideIndex <0) {
                slideIndex = slides.length - 1;
            }
            scrollSlide(slideIndex);
            updateCurrent(slideIndex);
            });
           */
    
