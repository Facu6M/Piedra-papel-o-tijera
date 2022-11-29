const input = document.getElementById("input")

const pie = document.querySelector(".piedra")
const pap = document.querySelector(".papel")
const tij = document.querySelector(".tijera")
const yo = document.getElementById("yo")
const pc = document.getElementById("pc")

const bloque = document.querySelector(".textoInicial")

let sen = ""

pie.addEventListener("click", pied)
function pied () {
    tex.innerHTML = `Elegiste piedra`
    sen = "piedra"
}

pap.addEventListener("click", pape)
function pape () {
    tex.innerHTML = `Elegiste papel`
    sen = "papel"
}

tij.addEventListener("click", tije)
function tije () {
    tex.innerHTML = `Elegiste tijera`
    sen = "tijera"
}

const boton = document.getElementById("send")
const texto = document.getElementById("texto")
const text = document.getElementById("text")



const tijera = document.getElementById("tijera")
const papel = document.getElementById("papel")
const piedra = document.getElementById("piedra")

const tex = document.getElementById("tex")

const letras = [
    "piedra",
    "papel",
    "tijera"
 ]



 ptsPC = 0
 ptsUsuario = 0

boton.addEventListener("click", menu)

function menu () {

opciones = sen;



randomIndex = Math.floor(Math.random() * letras.length)
random = letras[randomIndex]
console.log(letras[randomIndex])

operaciones();

}


function operaciones () {



    if (opciones == "piedra" || "tijera" || "papel" ) {
        if (opciones == "piedra" && random == "tijera") {
            text.innerHTML = `ganaste, porque la pc elijio ${random}`
          bloque.classList.add("green")
          bloque.classList.remove("red")
          bloque.classList.remove("black")
          ptsUsuario = ptsUsuario+1
          ptsPC = ptsPC + 0
          console.log(pts)
        }

        else if(opciones == "tijera" && random == "papel"){
            text.innerHTML = `ganaste, porque la pc elijio ${random}`
            bloque.classList.add("green")
            bloque.classList.remove("red")
            bloque.classList.remove("black")
            ptsUsuario = ptsUsuario + 1
            ptsPC = ptsPC + 0
           yo.innerText = `${ptsUsuario}`
           pc.innerText = `${ptsPC}`
        }
        else if(opciones == "papel" && random == "piedra"){
            text.innerHTML = `ganaste, porque la pc elijio ${random}`
            bloque.classList.add("green")
            bloque.classList.remove("red")
            bloque.classList.remove("black")
            ptsUsuario = ptsUsuario + 1
            ptsPC = ptsPC + 0
           yo.innerText = `${ptsUsuario}`
           pc.innerText = `${ptsPC}`
        }

        else if (opciones == "tijera" && random == "piedra") {
            text.innerHTML = `perdiste, porque la pc elijio ${random}`
            bloque.classList.add("red")
            bloque.classList.remove("green")
            bloque.classList.remove("black")
            ptsUsuario += 0
            ptsPC += 1
           yo.innerText = `${ptsUsuario}`
           pc.innerText = `${ptsPC}`
        }

        else if(opciones == "papel" && random == "tijera"){
            text.innerHTML = `perdiste, porque la pc elijio ${random}`
            bloque.classList.add("red")
            bloque.classList.remove("green")
            bloque.classList.remove("black")
            ptsUsuario += 0
            ptsPC += 1
           yo.innerText = `${ptsUsuario}`
           pc.innerText = `${ptsPC}`
        }
        else if(opciones == "piedra" && random == "papel"){
            text.innerHTML = `perdiste, porque la pc elijio ${random}`
            bloque.classList.add("red")
            bloque.classList.remove("green")
            bloque.classList.remove("black")
            ptsUsuario += 0
            ptsPC += 1
           yo.innerText = `${ptsUsuario}`
           pc.innerText = `${ptsPC}`
        }

        else if(opciones == random) {
            bloque.classList.add("black")
            bloque.classList.remove("green")
            bloque.classList.remove("red")
         text.innerHTML = `empataste porque la pc eligio ${random}`
          ptsUsuario += 0
            ptsPC += 0
           yo.innerText = `${ptsUsuario}`
           pc.innerText = `${ptsPC}`
        }
     }
     else{
         alert("la opcion es incorrecta")
     }



 }






