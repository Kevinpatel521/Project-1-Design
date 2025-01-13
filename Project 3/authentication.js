function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    if (username === "admin" && password === "admin") {
        alert("Login successful!");
    } else {
        alert("Invalid credentials!");
    }
}

function signUp() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    alert(`Sign Up successful for ${username} with email ${email}!`);
    document.getElementById('signup-form').reset();
}
