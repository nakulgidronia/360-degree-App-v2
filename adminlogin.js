document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    if ((userId === 'admin' || userId === 'ADMIN') && (password === 'ADMIN'|| password === 'admin')) {
        // Redirect to another page or show success message
        document.getElementById('loginFeedback').textContent = 'Login successful!';
        document.getElementById('loginFeedback').style.color = 'green';
        window.location.href = 'Userinfo.html';
        // For redirection, use: window.location.href = 'path/to/redirect';
    } else {
        document.getElementById('loginFeedback').textContent = 'Invalid ID or password.';
    }
});
