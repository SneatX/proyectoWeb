import { desplegarBarra } from "./modules/navBar.js";
import { mostrarTodos, mostrarAbrigos, mostrarCamisetas, mostrarPantalones , quitarSubrrayado} from "./modules/filtrarElementos.js";

const btnDesplegar = document.getElementById('btnDesplegarMenu');
btnDesplegar.addEventListener('click', desplegarBarra);


const btnMostrarTodos = document.getElementById("mostrarTodosPc")
btnMostrarTodos.addEventListener("click" , e =>{
    mostrarTodos()
    quitarSubrrayado()
    btnMostrarTodos.classList.add("paginaElegida")
})

const btnMostrarAbrigos = document.getElementById("mostrarAbrigosPc")
btnMostrarAbrigos.addEventListener("click" , e =>{
    mostrarAbrigos()
    quitarSubrrayado()
    btnMostrarAbrigos.classList.add("paginaElegida")
})

const btnMostrarCamisas = document.getElementById("mostrarCamisasPc")
btnMostrarCamisas.addEventListener("click" , e =>{
    mostrarCamisetas()
    quitarSubrrayado()
    btnMostrarCamisas.classList.add("paginaElegida")
})

const btnMostrarPantalones = document.getElementById("mostrarPantalonesPc")
btnMostrarPantalones.addEventListener("click" , e =>{
    mostrarPantalones()
    quitarSubrrayado()
    btnMostrarPantalones.classList.add("paginaElegida")
})