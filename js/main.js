const btnMenu = document.getElementById("btnMenuDes")
const menu = document.getElementById("menuDesplegable")

btnMenu.addEventListener("click" , (e) =>{
    if(menu.classList.contains("ocultarNav")){
        menu.classList.remove("ocultarNav")
        
    }
    else{
        menu.classList.add("ocultarNav")
    }
})