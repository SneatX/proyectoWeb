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
    document.querySelectorAll(".carrito__item ,.mainCarrito__total").forEach(element =>{
        element.style.display = "none"
    })

    document.querySelector(".carritoVacio").style.display = "block"
})


/*Filtros Movil */

const btnMostrarTodosMov = document.getElementById("mostrarTodosMov")
btnMostrarTodosMov.addEventListener("click" , e =>{
    mostrarTodos()
    quitarSubrrayado()
    btnMostrarTodosMov.classList.add("paginaElegida")

    document.querySelector(".container__main").style.display ="flex"
    document.querySelector(".container__mainCarrito").style.display ="none"

    document.getElementById("titleContainers").textContent = "Todos los productos"
})

const btnMostrarAbrigosMov = document.getElementById("mostrarAbrigosMov")
btnMostrarAbrigosMov.addEventListener("click" , e =>{
    mostrarAbrigos()
    quitarSubrrayado()
    btnMostrarAbrigosMov.classList.add("paginaElegida")

    document.querySelector(".container__main").style.display ="flex"
    document.querySelector(".container__mainCarrito").style.display ="none"

    document.getElementById("titleContainers").textContent = "Abrigos"
})

const btnMostrarCamisasMov = document.getElementById("mostrarCamisasMov")
btnMostrarCamisasMov.addEventListener("click" , e =>{
    mostrarCamisetas()
    quitarSubrrayado()
    btnMostrarCamisasMov.classList.add("paginaElegida")

    document.querySelector(".container__main").style.display ="flex"
    document.querySelector(".container__mainCarrito").style.display ="none"

    document.getElementById("titleContainers").textContent = "Camisas"
})

const btnMostrarPantalonesMov = document.getElementById("mostrarPantalonesMov")
btnMostrarPantalonesMov.addEventListener("click" , e =>{
    mostrarPantalones()
    quitarSubrrayado()
    btnMostrarPantalonesMov.classList.add("paginaElegida")

    document.querySelector(".container__main").style.display ="flex"
    document.querySelector(".container__mainCarrito").style.display ="none"

    document.getElementById("titleContainers").textContent = "Pantalones"
})

const btnCarritoMov = document.getElementById("btnCarritoMov")
btnCarritoMov.addEventListener("click" , e=>{
    quitarSubrrayado()
    btnCarritoMov.classList.add("paginaElegida")
    mostrarTodos()

    document.querySelector(".container__main").style.display ="none"
    document.querySelector(".container__mainCarrito").style.display ="block"
})


const btnVaciarCarritoMov = document.getElementById("btnVaciarCarrito")
btnVaciarCarritoMov.addEventListener("click" , e =>{

})