import { desplegarBarra } from "./modules/navBar.js";
import { limpiarInterfaz} from "./modules/ui/limpiarInterfaz.js"
import { filtroElegido } from "./modules/ui/filtroElegido.js";
import { calcularCantidadCarrito } from "./modules/ui/cantidadCarrito.js";

/*Barra desplegable*/
const btnDesplegar = document.getElementById('btnDesplegarMenu');
btnDesplegar.addEventListener('click', desplegarBarra);

/*Inicio en todos los productos*/ 
document.addEventListener("DOMContentLoaded" , e =>{
    e.preventDefault()
    filtroElegido("mostrarTodosPc")
    calcularCantidadCarrito()
})

/*Botones de filtro en pc*/
const botonesNavPc = document.querySelector(".nav__pc")
botonesNavPc.addEventListener("click" , e=>{
    filtroElegido(e.target.id) //se pasa el id del boton por parametro
})


const btnCarritoMovil = document.getElementById("btnCarritoMov")
btnCarritoMovil.addEventListener("click" , e=>{
    e.preventDefault()
    limpiarInterfaz()
    filtroElegido("btnCarrito")

    /*Estilos de los botones al mostrar*/
    btnCarritoMovil.classList.add("paginaElegida")
    document.querySelector(".container__main").style.display ="none"
    document.querySelector(".container__mainCarrito").style.display ="block"
})

