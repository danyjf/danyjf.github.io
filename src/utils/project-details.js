function projectDetails() {
    const viewProjectBtns = document.querySelectorAll('.projects__project-btn');
    const closeBtns = document.querySelectorAll('.project-details__close-btn');
    let projectDetails = null;

    viewProjectBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            projectDetails = document.querySelector('#project-details-' + btn.value);
            projectDetails.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        });
    });

    closeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (projectDetails)
            {
                projectDetails.style.display = 'none';
                document.body.style.overflowY = 'auto';
            }
        });
    });
}

export default projectDetails;
