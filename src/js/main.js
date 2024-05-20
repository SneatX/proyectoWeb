import { desplegarBarra } from "./modules/navBar.js";
import { mostrarTodos, mostrarAbrigos, mostrarCamisetas, mostrarPantalones , quitarSubrrayado} from "./modules/filtrarElementosPc.js";


/*Barra desplegable*/
const btnDesplegar = document.getElementById('btnDesplegarMenu');
btnDesplegar.addEventListener('click', desplegarBarra);

/*Filtros pc */

const btnMostrarTodosPc = document.getElementById("mostrarTodosPc")
btnMostrarTodosPc.addEventListener("click" , e =>{
    mostrarTodos()
    quitarSubrrayado()

    /*Estilos de los botones al mostrar*/
    btnMostrarTodosPc.classList.add("paginaElegida")
    document.querySelector(".container__main").style.display ="block"
    document.querySelector(".container__mainCarrito").style.display ="none"
    document.getElementById("titleContainers").textContent = "Todos los productos"
})

const btnMostrarAbrigosPc = document.getElementById("mostrarAbrigosPc")
btnMostrarAbrigosPc.addEventListener("click" , e =>{
    mostrarAbrigos()
    quitarSubrrayado()

    /*Estilos de los botones al mostrar*/
    btnMostrarAbrigosPc.classList.add("paginaElegida")
    document.querySelector(".container__main").style.display ="block"
    document.querySelector(".container__mainCarrito").style.display ="none"
    document.getElementById("titleContainers").textContent = "Abrigos"
})

const btnMostrarCamisasPc = document.getElementById("mostrarCamisasPc")
btnMostrarCamisasPc.addEventListener("click" , e =>{
    mostrarCamisetas()
    quitarSubrrayado()

    /*Estilos de los botones al mostrar*/
    btnMostrarCamisasPc.classList.add("paginaElegida")
    document.querySelector(".container__main").style.display ="block"
    document.querySelector(".container__mainCarrito").style.display ="none"
    document.getElementById("titleContainers").textContent = "Camisas"
})

const btnMostrarPantalonesPc = document.getElementById("mostrarPantalonesPc")
btnMostrarPantalonesPc.addEventListener("click" , e =>{
    mostrarPantalones()
    quitarSubrrayado()

    /*Estilos de los botones al mostrar*/
    btnMostrarPantalonesPc.classList.add("paginaElegida")
    document.querySelector(".container__main").style.display ="block"
    document.querySelector(".container__mainCarrito").style.display ="none"
    document.getElementById("titleContainers").textContent = "Pantalones"
})

const btnCarritoPc = document.getElementById("btnCarrito")
btnCarritoPc.addEventListener("click" , e=>{

    /*Estilos de los botones al mostrar*/
    quitarSubrrayado()
    btnCarritoPc.classList.add("paginaElegida")
    document.querySelector(".container__main").style.display ="none"
    document.querySelector(".container__mainCarrito").style.display ="block"
})


const btnVaciarCarritoPc = document.getElementById("btnVaciarCarrito")
btnVaciarCarritoPc.addEventListener("click" , e =>{

})

