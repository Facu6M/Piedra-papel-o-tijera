const input = document.getElementById("input")
const boton = document.getElementById("send")
const texto = document.getElementById("texto")
const text = document.getElementById("text")

const tijera = document.getElementById("tijera")
const papel = document.getElementById("papel")
const piedra = document.getElementById("piedra")

const letras = [
    "piedra",
    "papel",
    "tijera"
 ]

 boton.addEventListener("click", menu)

function menu () {
opciones = input.value.toLowerCase();

ptsPC = 0
ptsUsuario = 0

randomIndex = Math.floor(Math.random() * letras.length)
random = letras[randomIndex]
console.log(letras[randomIndex])

operaciones();
puntos()

}


function operaciones () {
    if (opciones == "piedra" || "tijera" || "papel" ) {
        if (opciones == "piedra" && random == "tijera") {
            text.innerHTML = `ganaste, porque la pc elijio ${random}`
          tijera.classList.add("green")
          tijera.classList.remove("red")
          piedra.classList.remove("green")
          piedra.classList.remove("red")
          papel.classList.remove("green")
          papel.classList.remove("red")
           ptsUsuario += 2
        }
        else if(opciones == "tijera" && random == "papel"){
            text.innerHTML = `ganaste, porque la pc elijio ${random}`
            papel.classList.add("green")
            papel.classList.remove("red")
            piedra.classList.remove("green")
            piedra.classList.remove("red")
            tijera.classList.remove("green")
            tijera.classList.remove("red")
         ptsUsuario += 2
        }
        else if(opciones == "papel" && random == "piedra"){
            text.innerHTML = `ganaste, porque la pc elijio ${random}`
            piedra.classList.add("green")
            piedra.classList.remove("red")
            tijera.classList.remove("red")
            tijera.classList.remove("green")
            papel.classList.remove("green")
            papel.classList.remove("red")
         ptsUsuario += 2
        }

        else if (opciones == "tijera" && random == "piedra") {
            text.innerHTML = `perdiste, porque la pc elijio ${random}`
            piedra.classList.add("red")
            piedra.classList.remove("green")
            tijera.classList.remove("red")
            tijera.classList.remove("green")
            papel.classList.remove("green")
            papel.classList.remove("red")
         ptsPC += 2
        }
        else if(opciones == "papel" && random == "tijera"){
            text.innerHTML = `perdiste, porque la pc elijio ${random}`
            tijera.classList.add("red")
            tijera.classList.remove("green")
            papel.classList.remove("green")
            papel.classList.remove("red")
            piedra.classList.remove("green")
            piedra.classList.remove("red")
         ptsPC += 2
        }
        else if(opciones == "piedra" && random == "papel"){
            text.innerHTML = `perdiste, porque la pc elijio ${random}`
            papel.classList.add("red")
            papel.classList.remove("green")
            piedra.classList.remove("green")
            piedra.classList.remove("red")
            tijera.classList.remove("green")
            tijera.classList.remove("red")
         ptsPC += 2
        }
        else if(opciones == random) {
         text.innerHTML = `empataste porque la pc eligio ${random}`
         ptsUsuario += 1
         ptsPC += 1
        }
     }
     else{
         alert("la opcion es incorrecta")
     }
}

function puntos (){
    if (ptsPC > ptsUsuario){
        texto.innerHTML = `Tus puntos son ${ptsUsuario} y los puntos de la pc son ${ptsPC}, por lo tanto gano la PC`
    } else if (ptsUsuario > ptsPC) {
        texto.innerHTML = `Tus puntos son ${ptsUsuario} y los puntos de la pc son ${ptsPC}, por lo tanto ganaste`
    } else {
        texto.innerHTML = "empataron, tienen los mismos puntos"
    }

}






