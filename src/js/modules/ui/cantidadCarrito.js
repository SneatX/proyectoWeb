import { getAllCarrito } from "../untils/apiService"

export const calcularCantidadCarrito = async()=>{
    let data = await getAllCarrito()
    document.getElementById("cantCarrito").textContent = data.length
}