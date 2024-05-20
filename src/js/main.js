import { desplegarBarra } from "./modules/navBar.js";
import { mostrarTodos, mostrarAbrigos, mostrarCamisetas, mostrarPantalones} from "./modules/filtrarElementosPc.js";


/*Barra desplegable*/
const btnDesplegar = document.getElementById('btnDesplegarMenu');
btnDesplegar.addEventListener('click', desplegarBarra);

/*Filtros pc */

const btnListaPc = document.querySelector(".pc__list")
btnListaPc.addEventListener("click" , e=>{
    
})

const btnMostrarTodosPc = document.getElementById("mostrarTodosPc")
btnMostrarTodosPc.addEventListener("click" , e =>{
    e.preventDefault()
    mostrarTodos()
    btnMostrarTodosPc.classList.add("paginaElegida")
})

const btnMostrarAbrigosPc = document.getElementById("mostrarAbrigosPc")
btnMostrarAbrigosPc.addEventListener("click" , e =>{
    e.preventDefault()
    mostrarAbrigos()
    btnMostrarAbrigosPc.classList.add("paginaElegida")
})

const btnMostrarCamisasPc = document.getElementById("mostrarCamisasPc")
btnMostrarCamisasPc.addEventListener("click" , e =>{
    e.preventDefault()
    mostrarCamisetas()
    btnMostrarCamisasPc.classList.add("paginaElegida")
})

const btnMostrarPantalonesPc = document.getElementById("mostrarPantalonesPc")
btnMostrarPantalonesPc.addEventListener("click" , e =>{
    e.preventDefault()
    mostrarPantalones()
    btnMostrarPantalonesPc.classList.add("paginaElegida")
})

const btnCarritoPc = document.getElementById("btnCarrito")
btnCarritoPc.addEventListener("click" , e=>{
    e.preventDefault()

    /*Estilos de los botones al mostrar*/
    btnCarritoPc.classList.add("paginaElegida")
    document.querySelector(".container__main").style.display ="none"
    document.querySelector(".container__mainCarrito").style.display ="block"
})


const btnVaciarCarritoPc = document.getElementById("btnVaciarCarrito")
btnVaciarCarritoPc.addEventListener("click" , e =>{
    e.preventDefault()

})

