"use strict";
window.addEventListener('DOMContentLoaded', function () {

    let tabs = document.querySelectorAll('.advantage__item'),
        tabsContent = document.querySelectorAll('.tab'),
        tabsParent = document.querySelector('.advantage__cards');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('advantage__item-active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('advantage__item-active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('advantage__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });

        }
    });
});