const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
button.addEventListener("click", (e) => {
e.target.classList.add(".btn-clicked");
});
});