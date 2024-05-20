import { MyItem } from "../components/my-item"
import { getAllAbrigos, getAllCamisetas, getAllPantalones, getAllCarrito } from "./untils/apiService";

customElements.define('my-item', MyItem);
let articlePrductos = document.querySelector(".main__products")

export async function mostrarTodos(){
    mostrarCamisetas()
    mostrarAbrigos()
    mostrarPantalones()
}

export async function mostrarAbrigos(){
    let data = await getAllAbrigos()
    data.forEach(articulo => {
        articlePrductos.innerHTML += `<my-item src="${articulo.imagen}" title="${articulo.nombre}" price="${articulo.precio}"></my-item>`
    });
}

export async function mostrarCamisetas(){
    let data = await getAllCamisetas()
    data.forEach(articulo => {
        articlePrductos.innerHTML += `<my-item src="${articulo.imagen}" title="${articulo.nombre}" price="${articulo.precio}"></my-item>`
    });
}

export async function mostrarPantalones(){
    let data = await getAllPantalones()
    data.forEach(articulo => {
        articlePrductos.innerHTML += `<my-item src="${articulo.imagen}" title="${articulo.nombre}" price="${articulo.precio}"></my-item>`
    });
}