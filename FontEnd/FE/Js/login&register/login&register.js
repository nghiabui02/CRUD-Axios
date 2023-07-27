
function loginForm(){
    document.getElementById('display').innerHTML = `<h1>Dang nhap</h1> <button onclick="login()">login</button> <button onclick="register()">Register</button>`
}
function register(){
    document.getElementById('display').innerHTML = `<h1>Dang Ky</h1> <button onclick="loginForm()">login</button> <button>Register</button>`
}
function login(){
    alert('dang nhap thanh cong')
    home()
}