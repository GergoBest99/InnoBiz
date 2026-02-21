// Immediate theme application to prevent flash
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    setupTheme();

    const usernameInput = document.getElementById('username');

    if (usernameInput) {
        usernameInput.addEventListener('input', function() {
            if (!this.value.startsWith('@')) {
                let currentText = this.value.replace(/@/g, '');
                this.value = '@' + currentText;
            }
        });
    }

    const nameInputs = [document.getElementById('name1'), document.getElementById('name2')];

    nameInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', function() {
                if (this.value.length > 0) {
                    this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
                }
            });
        }
    });
});

function setupTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;

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