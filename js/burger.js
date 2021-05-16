"use strict";
window.addEventListener('DOMContentLoaded', () => {

    const burgerMenu = document.querySelector('.burger-menu'),
          burgerBtn = document.querySelector('.toggle-btn');
       
    burgerBtn.addEventListener('click', function () {
    burgerMenu.style.display = 'block';
    });
    
    burgerMenu.addEventListener('click', (e) => {
        if (e.target  === burgerMenu) {
            burgerMenu.style.display = 'none';
        } 
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape') {
            burgerMenu.style.display = 'none';
        }
    });     
});