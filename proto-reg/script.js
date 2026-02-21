document.addEventListener('DOMContentLoaded', () => {
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

