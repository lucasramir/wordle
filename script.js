let intentos = 5;
let palabra;

fetch('https://random-word-api.herokuapp.com/word?length=5&lang=es')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        palabra = response [0].toUpperCase()    
        })
        .catch(err => console.error(err));
     


const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);



function intentar() {
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';

    if (INTENTO.length != 5) {
        alert("SOLO SE ADMITEN 5 LETRAS")
        return
    }

    if (INTENTO === palabra) {
        terminar("<h1>¡GANASTE!KP</h1>")
        return
    }
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';

        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#3759f3';

        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#b85151';

        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
    if (intentos == 0) {
        terminar("<h1>¡PERDISTE, INTENTALO DE NUEVO KP!</h1>")
    }
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}