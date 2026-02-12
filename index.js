document.addEventListener('DOMContentLoaded', () => {
    setupMenuToggle();
    setupCardSlider();
});

function setupMenuToggle() {
    const toggleBtn = document.getElementById('navbar-toggle');
    const navbar = document.getElementById('navbar');
    const overlay = document.getElementById('navbar-overlay');

    const toggleMenu = () => {
        const isHidden = navbar.classList.toggle('hidden');
        overlay.classList.toggle('hidden');

        if (isHidden) {
            document.body.classList.remove('no-scroll');
            toggleBtn.textContent = 'Open Menu';
        } else {
            document.body.classList.add('no-scroll');
            toggleBtn.textContent = 'Close Menu';
        }
    };

    toggleBtn.addEventListener('click', toggleMenu);

    // Close the menu if the user clicks the greyed-out area
    overlay.addEventListener('click', toggleMenu);
}

function setupCardSlider() {
    const containers = document.querySelectorAll('#main-content-2-cards, #main-content-3-cards');

    containers.forEach(container => {
        const cards = container.querySelectorAll('.card');
        let currentIndex = 0;

        if (cards.length <= 1) return;

        setInterval(() => {
            cards[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % cards.length;
            cards[currentIndex].classList.add('active');
        }, 4000);
    });
}