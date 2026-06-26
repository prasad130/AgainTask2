const registrationForm = document.getElementById("registrationForm");
if(registrationForm){
    registrationForm.addEventListener("submit", function(e){
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if(password !== confirmPassword){
        document.getElementById("error").innerText = "Passwords do not match";
        return;
    }
    let user = {
        username: username,
        email: email,
        mobile: mobile,
        password: password
    };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration Successful");
    window.location.href = "login.html";
});
}

const loginForm = document.getElementById("loginForm");
if(loginForm){
    loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.username === username && u.password === password);
    if(user){
        window.location.href = "home.html";
    }else{
        document.getElementById("error").innerText = "Invalid username or password";
    }
});
}

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
togglePassword.addEventListener("click", function(){
    if(password.type === "password"){
        password.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    }
    else{
        password.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});

const confirmPassword = document.getElementById("confirmPassword");
const toggleConfirm = document.getElementById("toggleConfirm");
toggleConfirm.addEventListener("click", function(){
    if(confirmPassword.type === "password"){
        confirmPassword.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    }
    else{
        confirmPassword.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});