const bienvenida = document.querySelector(".bienvenida");
const carta = document.getElementById("carta");
const textoCarta = document.getElementById("textoCarta");
const continuarBtn = document.getElementById("continuarBtn");
const galeria = document.getElementById("galeria");
const regaloFinal = document.getElementById("regaloFinal");
const caja = document.getElementById("caja");

const foto = document.getElementById("foto");
const descripcionFoto = document.getElementById("descripcionFoto");

const anteriorBtn = document.getElementById("anteriorBtn");
const siguienteBtn = document.getElementById("siguienteBtn");

const efectos = document.getElementById("efectos");
const musica = document.getElementById("musica");

const mensaje = `Hola Helen ❤️

Hoy es un día muy especial.

Quería hacerte este pequeño regalo porque eres una persona increíble.

Quizá no sea el mejor regalo que tengas,

Pero está hecho con muchísimo cariño.

Nunca dejes de ser como eres.

Eres de las mejores personas que he conocido,por no decir la mejor.

Espero tenerte para toda la vida.

Espero que disfrutes todo lo que viene ahora.

✨ Feliz cumpleaños ✨

Te quiero muchoo ❤️`;

document.getElementById("empezarBtn").addEventListener("click", () => {

    bienvenida.style.display = "none";

    if(musica){
        musica.volume = 0.4;
        musica.play().catch(()=>{});
    }

    carta.style.display = "block";

    escribirCarta();

});

function escribirCarta(){

    textoCarta.innerHTML = "";

    let i = 0;

    function escribir(){

        if(i < mensaje.length){

            textoCarta.innerHTML += mensaje.charAt(i);

            i++;

            setTimeout(escribir,40);

        }else{

            continuarBtn.style.display = "inline-block";

        }

    }

    escribir();

}

continuarBtn.addEventListener("click",()=>{

    carta.style.display = "none";

    galeria.style.display = "block";

    mostrarFoto();

});
const fotos = [

    "img/foto1.jpg",
    "img/foto2.jpg",
    "img/foto3.jpg",
    "img/foto4.jpg",
    "img/foto5.jpg",
    "img/foto6.jpg",
    "img/foto7.jpg",
    "img/foto8.jpg",
    "img/foto9.jpg"

];

const textos = [

    "❤️ Cuando nos conocimos.",
    "😊 Al pasar el tiempo sigues teniendo el mismo humor.",
    "😂 Tendrías que dedicarte a ser fotógrafa.",
    "😅 No me enteraba ni del clima.",
    "🥇 Fotón.",
    "✨ Espero seguir creando recuerdos contigo.",
    "🎉 Los guaposh.",
    "🔝 Fue una noche top.",
    "❤️ Feliz cumpleaños Helen."

];

let fotoActual = 0;

function mostrarFoto(){

    foto.classList.add("fade");

    setTimeout(()=>{

        foto.src = fotos[fotoActual];

        descripcionFoto.innerHTML = textos[fotoActual];

        foto.classList.remove("fade");

    },400);

}

siguienteBtn.addEventListener("click",()=>{

    fotoActual++;

    if(fotoActual >= fotos.length){

        galeria.style.display = "none";

        regaloFinal.style.display = "block";

        return;

    }

    mostrarFoto();

});

anteriorBtn.addEventListener("click",()=>{

    fotoActual--;

    if(fotoActual < 0){

        fotoActual = fotos.length - 1;

    }

    mostrarFoto();

});

function crearParticula(){

    const particula = document.createElement("div");

    particula.className = "particula";

    const dibujos = ["❤️","💕","💜","🎉","✨","🎊"];

    particula.innerHTML = dibujos[Math.floor(Math.random()*dibujos.length)];

    particula.style.left = Math.random()*100 + "vw";

    particula.style.animationDuration = (4 + Math.random()*4) + "s";

    particula.style.fontSize = (18 + Math.random()*20) + "px";

    efectos.appendChild(particula);

    setTimeout(()=>{

        particula.remove();

    },8000);

}

setInterval(()=>{

    if(galeria.style.display === "block"){

        crearParticula();

    }

},250);
caja.addEventListener("click",()=>{

    caja.style.transition="0.8s";

    caja.style.transform="scale(1.5) rotate(20deg)";

    caja.innerHTML="💥";

    for(let i=0;i<40;i++){

        crearParticula();

    }

    setTimeout(()=>{

        caja.style.display="none";

        const abrirTexto=document.getElementById("abrirTexto");

        if(abrirTexto){

            abrirTexto.style.display="none";

        }

        regaloFinal.innerHTML=`

        <h1>❤️ Feliz cumpleaños Helen ❤️</h1>

        <p style="font-size:30px;max-width:850px;margin:auto;line-height:1.8;">

        Espero que este pequeño regalo te haya sacado una sonrisa.<br><br>

        Gracias por todos los momentos que hemos vivido juntos.<br><br>

        Ojalá sigamos creando muchísimos más recuerdos.<br><br>

        ❤️ Te quiero muchoo ❤️

        </p>

        `;

    },1000);

});
