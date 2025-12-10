const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (!storedUser) {
        alert("No user found. Please signup first.");
        return;
    }

    if (email === storedUser.email && pass === storedUser.password) {
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "todos.html";
    } else {
        alert("Invalid credentials.");
    }
});
