let btnDesplegar = document.getElementById('btnDesplegarMenu')
let menuMovile = document.getElementById('menuDesplegable')

btnDesplegar.addEventListener('click', (e)=>{

    if(menuMovile.style.height === "0px" || !menuMovile.style.height){
        menuMovile.style.height = '160px'
    }
    else{
        menuMovile.style.height = '0px'
    }
})