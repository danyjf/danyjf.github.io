function modal() {
    const modalBtns = document.querySelectorAll('.modal__btn');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal__content');
    const modalCloseBtn = document.querySelector('.modal__close-btn')

    modalBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            modalContent.src = btn.src;
            modalContent.alt = btn.alt;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', (event) => {
        if (event.target == modal) {
            modalContent.src = '';
            modalContent.alt = '';
            modal.style.display = 'none';
        }
    });
}

export default modal;
