import { desplegarBarra } from "./modules/navBar.js";
import { mostrarTodos, mostrarAbrigos, mostrarCamisetas, mostrarPantalones , quitarSubrrayado} from "./modules/filtrarElementos.js";

const btnDesplegar = document.getElementById('btnDesplegarMenu');
btnDesplegar.addEventListener('click', desplegarBarra);


const btnMostrarTodos = document.getElementById("mostrarTodosPc")
btnMostrarTodos.addEventListener("click" , e =>{
    mostrarTodos()
    quitarSubrrayado()
    btnMostrarTodos.classList.add("paginaElegida")

    document.querySelector(".container__main").style.display ="block"
    document.querySelector(".container__mainCarrito").style.display ="none"
})

const btnMostrarAbrigos = document.getElementById("mostrarAbrigosPc")
btnMostrarAbrigos.addEventListener("click" , e =>{
    mostrarAbrigos()
    quitarSubrrayado()
    btnMostrarAbrigos.classList.add("paginaElegida")

    document.querySelector(".container__main").style.display ="block"
    document.querySelector(".container__mainCarrito").style.display ="none"
})

const btnMostrarCamisas = document.getElementById("mostrarCamisasPc")
btnMostrarCamisas.addEventListener("click" , e =>{
    mostrarCamisetas()
    quitarSubrrayado()
    btnMostrarCamisas.classList.add("paginaElegida")

    document.querySelector(".container__main").style.display ="block"
    document.querySelector(".container__mainCarrito").style.display ="none"
})

const btnMostrarPantalones = document.getElementById("mostrarPantalonesPc")
btnMostrarPantalones.addEventListener("click" , e =>{
    mostrarPantalones()
    quitarSubrrayado()
    btnMostrarPantalones.classList.add("paginaElegida")

    document.querySelector(".container__main").style.display ="block"
    document.querySelector(".container__mainCarrito").style.display ="none"
})

const btnCarrito = document.getElementById("btnCarrito")
btnCarrito.addEventListener("click" , e=>{
    quitarSubrrayado()
    btnCarrito.classList.add("paginaElegida")
    mostrarTodos()

    document.querySelector(".container__main").style.display ="none"
    document.querySelector(".container__mainCarrito").style.display ="block"
})