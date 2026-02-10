document.addEventListener('DOMContentLoaded', () => {
    setupMenuToggle();
});

function setupMenuToggle() {
    const toggleBtn = document.getElementById('navbar-toggle');
    const navbar = document.getElementById('navbar');

    toggleBtn.addEventListener('click', () => {
        const isHidden = navbar.classList.toggle('hidden');

        if (isHidden) {
            document.body.classList.remove('no-scroll');
            toggleBtn.textContent = 'Open Menu';
        } else {
            document.body.classList.add('no-scroll');
            toggleBtn.textContent = 'Close Menu';
        }
    });
}