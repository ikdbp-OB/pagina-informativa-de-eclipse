const boton = document.querySelector("#boton")
const texto = document.getElementById("texto")

boton.addEventListener("click", () => {
    texto.textContent = "Nuevo texto"
});

boton.addEventListener("click", () => {
    console.log("Mensaje cambiado correctamente")
});