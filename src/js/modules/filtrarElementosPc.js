import { MyItem } from "../components/my-item"
import { MycartItem } from "../components/my-cartItem";
import { getAllAbrigos, getAllCamisetas, getAllPantalones, getAllCarrito, getClotheByCodeAndType } from "./untils/apiService";

customElements.define("my-item", MyItem);
customElements.define("my-cart-item", MycartItem)

let articlePrductos = document.querySelector(".main__products")

export async function mostrarTodos(){
    mostrarCamisetas()
    mostrarAbrigos()
    mostrarPantalones()
}

export async function mostrarAbrigos(){
    let data = await getAllAbrigos()
    data.forEach(articulo => {
        articlePrductos.innerHTML += `<my-item src="${articulo.imagen}" title="${articulo.nombre}" price="${articulo.precio}" type="abrigo" id="${articulo.id}"></my-item>`
    });
}

export async function mostrarCamisetas(){
    let data = await getAllCamisetas()
    data.forEach(articulo => {
        articlePrductos.innerHTML += `<my-item src="${articulo.imagen}" title="${articulo.nombre}" price="${articulo.precio}" type="camiseta" id="${articulo.id}"></my-item>`
    });
}

export async function mostrarPantalones(){
    let data = await getAllPantalones()
    data.forEach(articulo => {
        articlePrductos.innerHTML += `<my-item src="${articulo.imagen}" title="${articulo.nombre}" price="${articulo.precio}" type="pantalon" id="${articulo.id}"></my-item>`
    });
}

export async function mostrarCarrito(){
    let data = await getAllCarrito()

    data.forEach(async articulo =>{
        if("abrigoId" in articulo){
            let [{nombre, imagen, precio}] = await getClotheByCodeAndType(articulo.abrigoId, "abrigo")
            document.querySelector(".main__carrito").innerHTML += `<my-cart-item src="${imagen}" title="${nombre}" cant="${articulo.cantidad}" priceU="${precio}" totalPrice="${precio * articulo.cantidad}"></my-cart-item>`
        }
        else if("pantalonId" in articulo){
            let [{nombre, imagen, precio}] = await getClotheByCodeAndType(articulo.pantalonId, "pantalon")
            document.querySelector(".main__carrito").innerHTML += `<my-cart-item src="${imagen}" title="${nombre}" cant="${articulo.cantidad}" priceU="${precio}" totalPrice="${precio * articulo.cantidad}"></my-cart-item>`
        }

        else if("camisetaId" in articulo){
            let [{nombre, imagen, precio}] = await getClotheByCodeAndType(articulo.camisetaId, "camiseta")
            document.querySelector(".main__carrito").innerHTML += `<my-cart-item src="${imagen}" title="${nombre}" cant="${articulo.cantidad}" priceU="${precio}" totalPrice="${precio * articulo.cantidad}"></my-cart-item>`
        }
    })
}