const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letras = [
    "HAPPY",
    "BIRTHDAY",
    "HELEN",
    "❤️",
    "✨"
];

const tamaño = 28;

const columnas = Math.floor(canvas.width / tamaño);

const gotas = [];

for(let i=0;i<columnas;i++){

    gotas[i]=1;

}

function dibujar(){

    ctx.fillStyle="rgba(0,0,0,0.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#EC407A";
    ctx.font=tamaño+"px Arial";

    for(let i=0;i<gotas.length;i++){

        const palabra=letras[Math.floor(Math.random()*letras.length)];

        ctx.fillText(palabra,i*tamaño,gotas[i]*tamaño);

        if(gotas[i]*tamaño>canvas.height && Math.random()>0.975){

            gotas[i]=0;

        }

        gotas[i]++;

    }

}

setInterval(dibujar,45);
const contador = document.getElementById("contador");
const texto = document.getElementById("texto");

let numero = 5;

setTimeout(()=>{

    contador.style.display="block";

    const intervalo = setInterval(()=>{

        contador.innerHTML=numero;

        numero--;

        if(numero<0){

            clearInterval(intervalo);

            contador.style.display="none";

            mostrarTexto();

        }

    },1000);

},2000);

function mostrarTexto(){

    texto.style.display="block";

    texto.innerHTML="HAPPY";
    texto.style.animation="none";

setTimeout(()=>{

    texto.style.animation="zoomTexto 1s";

},20);

    setTimeout(()=>{

        texto.innerHTML="HAPPY BIRTHDAY";
        texto.style.animation="none";

setTimeout(()=>{

    texto.style.animation="zoomTexto 1s";

},20);

    },1800);

    setTimeout(()=>{

        texto.innerHTML="HAPPY BIRTHDAY HELEN ❤️";
        texto.style.animation="none";

setTimeout(()=>{

    texto.style.animation="zoomTexto 1s";

},20);

    },3800);
    setTimeout(()=>{

    document.body.style.opacity="0";

},7000);

setTimeout(()=>{

    window.location.href="index.html";

},9000);

}
