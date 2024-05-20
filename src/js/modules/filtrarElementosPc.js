import { MyItem } from "../components/my-item"
import { limpiarInterfaz } from "./ui/limpiarInterfaz";
import { getAllAbrigos, getAllCamisetas, getAllPantalones, getAllCarrito } from "./untils/apiService";

customElements.define('my-item', MyItem);
let articlePrductos = document.querySelector(".main__products")

export async function mostrarTodos(){
    limpiarInterfaz()

    /*Estilos de los botones al mostrar*/
    document.querySelector(".container__main").style.display ="block"
    document.querySelector(".container__mainCarrito").style.display ="none"
    document.getElementById("titleContainers").textContent = "Todos los productos"
}

export async function mostrarAbrigos(){
    limpiarInterfaz()
    /*Estilos de los botones al mostrar*/
    document.querySelector(".container__main").style.display ="block"
    document.querySelector(".container__mainCarrito").style.display ="none"
    document.getElementById("titleContainers").textContent = "Abrigos"

    let data = await getAllAbrigos()
    data.forEach(articulo => {
        articlePrductos.innerHTML += `<my-item src="${articulo.imagen} title="${articulo.nombre} price="${articulo.precio}"></my-item>`
    });
}

export async function mostrarCamisetas(){
    limpiarInterfaz()
    /*Estilos de los botones al mostrar*/
    document.querySelector(".container__main").style.display ="block"
    document.querySelector(".container__mainCarrito").style.display ="none"
    document.getElementById("titleContainers").textContent = "Camisas"

    let data = await getAllCamisetas()
    data.forEach(articulo => {
        articlePrductos.innerHTML += `<my-item src="${articulo.imagen} title="${articulo.nombre} price="${articulo.precio}"></my-item>`
    });
}

export async function mostrarPantalones(){
    limpiarInterfaz()
    /*Estilos de los botones al mostrar*/
    document.querySelector(".container__main").style.display ="block"
    document.querySelector(".container__mainCarrito").style.display ="none"
    document.getElementById("titleContainers").textContent = "Pantalones"

    let data = await getAllPantalones()
    data.forEach(articulo => {
        articlePrductos.innerHTML += `<my-item src="${articulo.imagen} title="${articulo.nombre} price="${articulo.precio}"></my-item>`
    });
}