import { desplegarBarra } from "./modules/navBar.js";
import { limpiarInterfaz} from "./modules/ui/limpiarInterfaz.js"
import { filtroElegido } from "./modules/ui/filtroElegido.js";

/*Barra desplegable*/
const btnDesplegar = document.getElementById('btnDesplegarMenu');
btnDesplegar.addEventListener('click', desplegarBarra);

/*Inicio en todos los productos*/ 
document.addEventListener("DOMContentLoaded" , e =>{
    e.preventDefault()
    filtroElegido("mostrarTodosPc")
})

/*Botones de filtro en pc*/
const btnListaPc = document.querySelector(".pc__list")
btnListaPc.addEventListener("click" , e=>{
    filtroElegido(e.target.id) //se pasa el id del boton por parametro
})


const btnCarritoPc = document.getElementById("btnCarrito")
btnCarritoPc.addEventListener("click" , e=>{
    e.preventDefault()
    limpiarInterfaz()

    /*Estilos de los botones al mostrar*/
    btnCarritoPc.classList.add("paginaElegida")
    document.querySelector(".container__main").style.display ="none"
    document.querySelector(".container__mainCarrito").style.display ="block"
})


const btnVaciarCarritoPc = document.getElementById("btnVaciarCarrito")
btnVaciarCarritoPc.addEventListener("click" , e =>{
    e.preventDefault()

})

