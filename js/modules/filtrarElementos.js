export function quitarSubrrayado(){
    document.getElementById("mostrarTodosPc").classList.remove("paginaElegida")
    document.getElementById("mostrarAbrigosPc").classList.remove("paginaElegida")
    document.getElementById("mostrarCamisasPc").classList.remove("paginaElegida")
    document.getElementById("mostrarPantalonesPc").classList.remove("paginaElegida")
}

export function mostrarTodos(){
    siCamisa()
    siAbrigo()
    siPantalon()
}

export function mostrarAbrigos(){
    siAbrigo()
    noPantalon()
    noCamisa()
}

export function mostrarCamisetas(){
    siCamisa()
    noPantalon()
    noAbrigo()
}

export function mostrarPantalones(){
    siPantalon()
    noCamisa()
    noAbrigo()
}


function siCamisa(){
    document.querySelectorAll(".camisa").forEach(function(elemento) {
        elemento.style.display = "flex";
    });
}

function noCamisa(){
    document.querySelectorAll(".camisa").forEach(function(elemento) {
        elemento.style.display = "none";
    });
}

function siAbrigo(){
    document.querySelectorAll(".abrigo").forEach(function(elemento) {
        elemento.style.display = "flex";
    });
}

function noAbrigo(){
    document.querySelectorAll(".abrigo").forEach(function(elemento) {
        elemento.style.display = "none";
    });
}

function siPantalon(){
    document.querySelectorAll(".pantalon").forEach(function(elemento) {
        elemento.style.display = "flex";
    });
}

function noPantalon(){
    document.querySelectorAll(".pantalon ").forEach(function(elemento) {
        elemento.style.display = "none";
    });
}