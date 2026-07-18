const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mensaje = document.getElementById("mensaje");

const pregunta = document.getElementById("pregunta");
const sorpresa = document.getElementById("sorpresa");
const continuarBtn = document.getElementById("continuarBtn");

let tamaño = 1;

const frases = [
    "¿Segura? 🥺",
    "¿De verdad? 😢",
    "Piénsalo otra vez ❤️",
    "No seas mala 😭",
    "El botón SÍ es mejor 😎"
];

let contador = 0;

noBtn.addEventListener("mouseover", () => {

    if(contador < frases.length){
        mensaje.innerHTML = frases[contador];
        contador++;
    }   

    tamaño += 0.2;
    yesBtn.style.transform = `scale(${tamaño})`;

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});
yesBtn.addEventListener("click", () => {

    pregunta.style.display = "none";
    sorpresa.style.display = "block";

});
continuarBtn.addEventListener("click", () => {

    window.location.href = "regalo.html";

});