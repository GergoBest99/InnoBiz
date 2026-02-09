document.addEventListener('DOMContentLoaded', () => {
    setupMenuToggle();
});

function setupMenuToggle() {
    const toggleBtn = document.getElementById('navbar-toggle');
    const navbar = document.getElementById('navbar');

    toggleBtn.addEventListener('click', () => {
        navbar.classList.toggle('hidden');

        if (navbar.classList.contains('hidden')) {
            toggleBtn.textContent = 'Open Menu';
        } else {
            toggleBtn.textContent = 'Close Menu';
        }
    });
}