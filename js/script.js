"use strict";

const slides = document.querySelectorAll('.slider__slides-item'),
      prevBtn = document.querySelector('#left-button'),
      nextBtn =document.querySelector('#right-button');
let  slideIndex = 1;

showSlides(slideIndex);   

// function showSlides (n) {
//     if(n < 1) {
//         slideIndex = slides.length;
//     }else if (n> slides.length) {
//         slideIndex = 1;
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';  
//     }
//     slides[slideIndex - 1].style.display = 'block';
// } 


function showSlides(n) {
    if(n > slides.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none');
    slides[slideIndex -1].style.display = 'block';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

prevBtn.addEventListener('click', () => {
    plusSlides (-1);
});

nextBtn.addEventListener('click', () => {
    plusSlides (1);
});     


//menu burger 

let  hamburger = document.querySelector('.hamburger'),
     menu = document.querySelector('.menu'),
     closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});



//modal

const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
  
