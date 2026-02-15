document.addEventListener('DOMContentLoaded', () => {
    setupMenuToggle();
    renderServiceCards();
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
    const containers = document.querySelectorAll('.card-slider-container');

    containers.forEach(container => {
        const cards = container.querySelectorAll('.card');
        let currentIndex = 0;

        if (cards.length <= 1) return;

        setInterval(() => {
            cards[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % cards.length;
            cards[currentIndex].classList.add('active');
        }, 5000);
    });
}

function renderServiceCards() {
    const container = document.getElementById('main-content-2-cards');
    if (!container || !servicesData) return;

    const randomizedData = shuffleArray([...servicesData]);

    // clear any placeholders
    container.innerHTML = '';

    randomizedData.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = `card ${index === 0 ? 'active' : ''}`;

        const tagsHTML = service.tags.map(tag => `<li>${tag}</li>`).join('');

        card.innerHTML = `
            <div class="card-category-wrapper">
                <div class="card-icon">${service.icon}</div>
                <span class="card-category">${service.category}</span>
            </div>
            <h2>${service.name}</h2>
            <p>${service.description}</p>
            <ul class="sub-service-tags">
                ${tagsHTML}
            </ul>
        `;

        container.appendChild(card);
    });
}

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}