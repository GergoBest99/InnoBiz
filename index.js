// Immediate theme application to prevent flash
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    setupTheme();
    setupMenuToggle();
    renderServiceCards();
    setupCardSlider();
    setupImageSlider();
});

function setupTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // Ensure the button icon matches the theme
        themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        
        localStorage.setItem('theme', newTheme);
        
        themeBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
}

function setupMenuToggle() {
    const toggleBtn = document.getElementById('navbar-toggle');
    const navbar = document.getElementById('navbar');
    const overlay = document.getElementById('navbar-overlay');

    const toggleMenu = () => {
        const isHidden = navbar.classList.toggle('hidden');
        overlay.classList.toggle('hidden');

        if (isHidden) {
            document.body.classList.remove('no-scroll');
        } else {
            document.body.classList.add('no-scroll');
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
            <ul class="card-tags">
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

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function setupImageSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    setInterval(() => {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 4000);
}

// 4 másodpercenként váltás
setInterval(nextSlide, 4000);