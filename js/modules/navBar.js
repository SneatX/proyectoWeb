const menuMovil = document.getElementById('menuDesplegable');

export function desplegarBarra() {
    console.log("asd");
    if (menuMovil.style.height === "0px" || !menuMovil.style.height) {
        menuMovil.style.height = '160px';
    } else {
        menuMovil.style.height = '0px';
    }
}
