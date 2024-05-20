export function limpiarInterfaz(){
    document.getElementById("mostrarTodosPc").classList.remove("paginaElegida")
    document.getElementById("mostrarAbrigosPc").classList.remove("paginaElegida")
    document.getElementById("mostrarCamisasPc").classList.remove("paginaElegida")
    document.getElementById("mostrarPantalonesPc").classList.remove("paginaElegida")
    document.getElementById("btnCarrito").classList.remove("paginaElegida")

    document.querySelector(".main__products").innerHTML = ""
}