function projectDetails() {
    const viewProjectBtns = document.querySelectorAll('.projects__project-btn');
    const closeBtns = document.querySelectorAll('.project-details__close-btn');
    let projectDetails = null;

    viewProjectBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            projectDetails = document.querySelector('#project-details-' + btn.value);
            projectDetails.classList.add('slide-from-right');
            projectDetails.classList.remove('slide-to-right');
            document.body.style.overflowY = 'hidden';
        });
    });

    closeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (projectDetails)
            {
                projectDetails.classList.add('slide-to-right');
                projectDetails.classList.remove('slide-from-right');
                document.body.style.overflowY = 'auto';
            }
        });
    });
}

export default projectDetails;
