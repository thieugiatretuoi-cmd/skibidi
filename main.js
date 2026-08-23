function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    if (username === 'nigger' && password === 'password') {
        message.innerText = 'Login successful!';
        message.style.color = 'green';
    } else {
        message.innerText = 'Invalid username or password.';
        message.style.color = 'red';
    }
}
function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}