const texto = document.getElementById("texto");

const mensajes = [
    "30",
    "31",
    "1",
    "2",
    "3",
    "4",
    "5 días...",
    "Ha caducado."
];

let i = 0;

function mostrar() {

    texto.style.opacity = "1";
    texto.innerHTML = mensajes[i];

    i++;

    if(i < mensajes.length){

        setTimeout(() => {

            texto.style.opacity = "0";

            setTimeout(mostrar,300);

        },1000);

    }

}

mostrar();
