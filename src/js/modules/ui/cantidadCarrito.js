import { getAllCarrito } from "../untils/apiService";

export const calcularCantidadCarrito = async () => {
    let data = await getAllCarrito();
    document.getElementById("cantCarrito").textContent = data.length;
    if(data.length === 0){
        const element = await waitForElementToDisplay(".main__carrito");
        element.innerHTML = "<h2 class='msjVacio'>No hay elementos en el carrito :c</h2>"

        const buttons = await waitForElementToDisplay("my-cart-btns");
        buttons.style.display = "none"

    }else{
        const buttons = await waitForElementToDisplay("my-cart-btns");
        buttons.style.display = "block"

        const element = await waitForElementToDisplay(".msjVacio");
        element.remove()
    }
}

function waitForElementToDisplay(selector) {
    return new Promise((resolve) => {
        const targetNode = document.querySelector(selector);
        if (targetNode) {
            resolve(targetNode);
        } else {
            const observer = new MutationObserver((mutationsList, observer) => {
                const targetNode = document.querySelector(selector);
                if (targetNode) {
                    observer.disconnect();
                    resolve(targetNode);
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }
    });
}
