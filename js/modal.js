"use strict";
window.addEventListener('DOMContentLoaded', () => {

    const modalTriggerLog = document.querySelector('#modal__trigger-log'),
          modalLog = document.querySelector('.modal-log'),
          modalLogClose = document.querySelector('#close-modal-log'),
          modalTriggerReg = document.querySelector('#modal__trigger-reg'),
          modalReg = document.querySelector('.modal-reg'),
          modalRegClose = document.querySelector('#close-modal-reg');

    function closeModalLog() {
        modalLog.classList.toggle('hide');
        document.body.style.overflow = "";
    }

    function closeModalReg() {
        modalReg.classList.toggle('hide');
        document.body.style.overflow = "";
    }

    modalTriggerLog.addEventListener('click', (e) => {
        e.preventDefault();
        modalLog.classList.toggle('hide');
        document.body.style.overflow = "hidden";
    });

    modalTriggerReg.addEventListener('click', (e) => {
        e.preventDefault();
        modalReg.classList.toggle('hide');
        document.body.style.overflow = "hidden";
    });

    modalLogClose.addEventListener('click', closeModalLog);
    modalRegClose.addEventListener('click', closeModalReg);

    modalLog.addEventListener('click', (e) => {
        if (e.target === modalLog) {
            closeModalLog();
        }
    });

    modalReg.addEventListener('click', (e) => {
        if (e.target === modalReg) {
            closeModalReg();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && !modalLog.classList.contains('hide')) {
            closeModalLog();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && !modalReg.classList.contains('hide')) {
            closeModalReg();
        }
    });
});