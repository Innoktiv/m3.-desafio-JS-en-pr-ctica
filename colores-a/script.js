const colores = document.querySelectorAll(".color");
const principal = document.getElementById("principal");

colores.forEach((color) => {
    color.addEventListener("click", () => {
        principal.style.backgroundColor = color.style.backgroundColor;
    });
});
