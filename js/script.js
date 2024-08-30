let numrandom = Math.floor(Math.random() * 100) + 1;

const resultado = document.querySelector(".resultado");
const resAnterior = document.querySelector(".previa");
const ayuda = document.querySelector(".pista");
const btn = document.querySelector(".btnEnviar");
const num = document.querySelector(".numero");

let cont = 1;
let resetButton;

function juega() {
    let numUsuario = Number(num.value);

    if (cont === 1) {
        resAnterior.textContent = "Números anteriores: ";
    }
    resAnterior.textContent += numUsuario + " - ";

    if (numUsuario === numrandom) {
        resultado.textContent = "¡Felicidades! ¡Lo adivinaste!";
        resultado.style.backgroundColor = "green";
        ayuda.textContent = "";
        finJuego();
    } else if (cont === 10) {
        resultado.textContent = "¡¡¡Fin del juego!!!";
        finJuego();
    } else {
        resultado.textContent = "¡Incorrecto!";
        resultado.style.backgroundColor = "red";
        if (numUsuario < numrandom) {
            ayuda.textContent = "¡El número es más grande!";
        } else if (numUsuario > numrandom) {
            ayuda.textContent = "¡El número es más pequeño!";
            ayuda.style.backgroundColor = "";
        }
    }

    cont++;
    num.value = "";
    num.focus();
}

btn.addEventListener("click", juega);

function finJuego() {
    num.disabled = true;
    btn.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Volver a Jugar";
    const formulario = document.querySelector('.form');
    formulario.appendChild(resetButton);
    resetButton.addEventListener("click", resetJuego);
}

function resetJuego() {
    cont = 1;
    const mensajes = document.querySelectorAll(".mensajes p");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);
    num.disabled = false;
    btn.disabled = false;
    num.value = "";
    num.focus();

    resultado.style.backgroundColor = "#B3E5FC";

    numrandom = Math.floor(Math.random() * 100) + 1;
}
