import { MyItem } from "../components/my-item"

customElements.define('my-item', MyItem);

export function quitarSubrrayado(){
    document.getElementById("mostrarTodosPc").classList.remove("paginaElegida")
    document.getElementById("mostrarAbrigosPc").classList.remove("paginaElegida")
    document.getElementById("mostrarCamisasPc").classList.remove("paginaElegida")
    document.getElementById("mostrarPantalonesPc").classList.remove("paginaElegida")
    document.getElementById("btnCarrito").classList.remove("paginaElegida")
}

export function mostrarTodos(){

}

export function mostrarAbrigos(){

}

export function mostrarCamisetas(){

}

export function mostrarPantalones(){

}