document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        if (email === '' || password === '') {
            errorMessage.textContent = 'Email dan Password (NIM) tidak boleh kosong.';
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            alert('Login berhasil!'); 
            window.location.href = 'dashboard.html'; 
        }
    });
});