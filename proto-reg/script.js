(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const pass1 = document.getElementById('password1');
    const pass2 = document.getElementById('password2');
    const passwordHint = document.querySelector('.password-hint');
    const errorMsg = document.getElementById('passwordError');
    const usernameInput = document.getElementById('username');
    const nameInputs = [document.getElementById('name1'), document.getElementById('name2')];
    const successMsg = document.getElementById('successMessage');
    setupTheme();

    if (usernameInput) {
        usernameInput.addEventListener('input', function() {
            if (!this.value.startsWith('@')) {
                let currentText = this.value.replace(/@/g, '');
                this.value = '@' + currentText;
            }
        });
    }

  
    nameInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', function() {
                if (this.value.length > 0) {
                    this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
                }
            });
        }
    });


    if (pass1) {
        pass1.addEventListener('input', () => {
            passwordHint.classList.remove('visible');
        });
    }


    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isError = false;
            if (!pass1.checkValidity()) {
                passwordHint.classList.add('visible');
                isError = true;
            }
            if (pass1.value !== pass2.value) {
                errorMsg.textContent = "A két jelszó nem egyezik meg!";
                errorMsg.classList.add('show');
                isError = true;
            } else {
                errorMsg.classList.remove('show');
            }
            if (!isError) {
                loginForm.style.display = 'none';
                successMsg.classList.add('show');
            }
        });
    }
});


function setupTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
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