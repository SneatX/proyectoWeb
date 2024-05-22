import { mostrarTodos, mostrarAbrigos, mostrarCamisetas, mostrarPantalones, mostrarCarrito} from "../filtrarElementosPc"
import { limpiarInterfaz } from "./limpiarInterfaz"
import { desplegarBarra } from "./navBar"

const btnMostrarTodosPc = document.getElementById("mostrarTodosPc")
const btnMostrarAbrigosPc = document.getElementById("mostrarAbrigosPc")
const btnMostrarCamisasPc = document.getElementById("mostrarCamisasPc")
const btnMostrarPantalonesPc = document.getElementById("mostrarPantalonesPc")
const btnCarritoPc = document.getElementById("btnCarrito")


export const filtroElegidoPc = (cod)=>{
    document.querySelector(".container__main").style.display ="block"
    document.querySelector(".container__mainCarrito").style.display ="none"
    limpiarInterfaz()
    switch(cod){
        case "mostrarTodosPc":
            mostrarTodos()
            btnMostrarTodosPc.classList.add("paginaElegida")
            document.getElementById("titleContainers").textContent = "Todos los productos"
            break
        case "mostrarAbrigosPc":
            mostrarAbrigos()
            btnMostrarAbrigosPc.classList.add("paginaElegida")
            document.getElementById("titleContainers").textContent = "Abrigos"
            break
        case "mostrarCamisasPc":
            mostrarCamisetas()
            btnMostrarCamisasPc.classList.add("paginaElegida")    
            document.getElementById("titleContainers").textContent = "Camisetas"
            break
        case "mostrarPantalonesPc":
            mostrarPantalones()
            btnMostrarPantalonesPc.classList.add("paginaElegida")
            document.getElementById("titleContainers").textContent = "Pantalones"
            break
        case "btnCarrito":
            mostrarCarrito()
            btnCarritoPc.classList.add("paginaElegida")
            document.querySelector(".main__carrito").innerHTML = ""
            document.querySelector(".container__main").style.display ="none"
            document.querySelector(".container__mainCarrito").style.display ="block"

    }
}

export const filtroElegidoMobil = (cod) =>{


    if(cod != "btnDesplegarMenu"){
        limpiarInterfaz()
        document.querySelector(".container__main").style.display ="block"
        document.querySelector(".container__mainCarrito").style.display ="none"
    }
        
    switch(cod){
        case "btnDesplegarMenu":
            desplegarBarra()
            break
        case "mostrarTodosMob":
            mostrarTodos()
            btnMostrarTodosPc.classList.add("paginaElegida")
            document.getElementById("titleContainers").textContent = "Todos los productos"
            break
        case "mostrarAbrigosMob":
            mostrarAbrigos()
            btnMostrarAbrigosPc.classList.add("paginaElegida")
            document.getElementById("titleContainers").textContent = "Abrigos"
            break
        case "mostrarCamisasMob":
            mostrarCamisetas()
            btnMostrarCamisasPc.classList.add("paginaElegida")    
            document.getElementById("titleContainers").textContent = "Camisetas"
            break
        case "mostrarPantalonesMob":
            mostrarPantalones()
            btnMostrarPantalonesPc.classList.add("paginaElegida")
            document.getElementById("titleContainers").textContent = "Pantalones"
            break
        case "btnCarritoMob":
            mostrarCarrito()
            document.querySelector(".container__main").style.display ="none"
            document.querySelector(".container__mainCarrito").style.display ="block"
    }
}