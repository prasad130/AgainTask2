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