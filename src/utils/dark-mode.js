function darkMode() {
    const themeToggleButtons = document.querySelectorAll('#theme-toggle');

    themeToggleButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });
    });
}

export default darkMode;
