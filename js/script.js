// Función para encriptar el texto
function encryptText() {
    const input = document.getElementById("nombre").value;
    const output = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    displayResult(output);
}

// Función para desencriptar el texto
function decryptText() {
    const input = document.getElementById("nombre").value;
    const output = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    displayResult(output);
}

// Función para mostrar el resultado
function displayResult(text) {
    const resultContainer = document.querySelector(".container__text.text--2 p");
    const resultSubtext = document.querySelector(".container__text.text--2 span");

    if (text) {
        resultContainer.textContent = text;
        resultSubtext.textContent = "";
    } else {
        resultContainer.textContent = "Ningún mensaje fue encontrado";
        resultSubtext.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    }
}

// Agregar eventos a los botones
document.querySelector(".btn--1").addEventListener("click", encryptText);
document.querySelector(".btn--2").addEventListener("click", decryptText);