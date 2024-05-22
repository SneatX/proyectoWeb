import { filtroElegidoPc, filtroElegidoMobil} from "./modules/ui/filtroElegido.js";
import { calcularCantidadCarrito } from "./modules/ui/cantidadCarrito.js";

/*Inicio en todos los productos*/ 
document.addEventListener("DOMContentLoaded" , e =>{
    e.preventDefault()
    filtroElegidoPc("mostrarTodosPc")
    calcularCantidadCarrito()
})

/*Botones de filtro en pc*/
const botonesNavPc = document.querySelector(".nav__pc")
botonesNavPc.addEventListener("click" , e=>{
    let posiblesCasosPc = ["mostrarTodosPc", "mostrarAbrigosPc", "mostrarCamisasPc", "mostrarPantalonesPc", "btnCarrito"]
    if(posiblesCasosPc.includes(e.target.id)) filtroElegidoPc(e.target.id)
})

/*Botones de filtro en mobil*/
const botonesNavMov = document.querySelector(".nav__movile")
botonesNavMov.addEventListener("click" , e=>{
    let posiblesCasosMobil = ["btnDesplegarMenu", "mostrarTodosMob", "mostrarAbrigosMob", "mostrarCamisasMob", "mostrarPantalonesMob", "btnCarritoMob"]
    if(posiblesCasosMobil.includes(e.target.id)) filtroElegidoMobil(e.target.id)
})


