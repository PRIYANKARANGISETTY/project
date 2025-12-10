import { displayTodos } from "./displayTodos.js";

// Check authentication
if (localStorage.getItem("loggedIn") !== "true") {
    alert("Please login first!");
    window.location.href = "login.html";
}

async function fetchTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    displayTodos(data);
}

fetchTodos();
