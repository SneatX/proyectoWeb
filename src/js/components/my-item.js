import { LitElement, html, css } from "lit"
import { getAllCarrito } from "../modules/untils/apiService";
import { calcularCantidadCarrito } from "../modules/ui/cantidadCarrito";

export class MyItem extends LitElement{
    static properties = {
        src: { type: String },
        title: { type: String },
        price: { type: String },
        type: {type: String},
        id: {type: String}
      };
    
      constructor() {
        super()
        this.src = ''
        this.title = ''
        this.price = ''
        this.type = ""
        this.id = ""
      }

static styles =css`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Gugi", sans-serif;
    }
    .products__item {
        border: 1px solid white;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        margin: 10px;
        border-radius: 30px;
        height: 300px;
        overflow: hidden;
        text-transform: capitalize;
        justify-content: space-between;
        align-items: center;
    }
    .item__img {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 70%;
        padding: 5px;
    }
    
    .item__img img {
        max-height: 200px;
        -webkit-user-drag: none;
        object-fit: cover;
    }
    .item__info {
        padding: 10px;
        background: var(--color-two);
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    .info__title {
        height: 50%;
        overflow: hidden;
        white-space: nowrap;
        position: relative;
    }

    .info__title > h2 {
        font-size: 1.3em;
        text-align: center;
        text-shadow:
        -1px -1px 0 white,
        1px -1px 0 white,
        -1px 1px 0 white,
        1px 1px 0 white;
        display: inline-block;
        position: absolute;
        white-space: nowrap;
        transition: transform 0s linear;
    }

    .products__item:hover .info__title > h2 {
        animation: scrollText 8s linear infinite;
    }

    @keyframes scrollText {
        0% {
        transform: translateX(0);
        }
        50% {
        transform: translateX(-60%);
        }
        100% {
        transform: translateX(0);
        }
    }

    .info__add>h2 {
        font-size: 1em;
    }
    
    .info__add {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        height: 50%;
        color: white;
    }
    
    .info__add button {
        border: 0;
        border-radius: 5px;
        padding: 10px;
    }
    
    .info__add button:hover {
        background-color: gray;
        cursor: pointer;
    
    }
    `

    render() {
        return html`
        <section class="products__item">
            <div class="item__img">
                <img src="${this.src}" alt="${this.title}">
            </div>
            <div class="item__info">
                <div class="info__title" >
                    <h2>${this.title}</h2>
                </div>
                <div class="info__add">
                    <h2>$ ${this.price}</h2>
                    <button @click="${this._AddToCart}">Agregar</button>
                </div>
            </div>
        </section>
        `;
    }


    async _AddToCart() {
        let carrito = await getAllCarrito()
        let tipoId
        if(this.type == "camiseta") tipoId = "camisetaId"
        if(this.type == "abrigo") tipoId = "abrigoId"
        if(this.type == "pantalon") tipoId = "pantalonId"

        let bandera = true
        carrito.forEach(async prendaCarrito => {
            if(tipoId in prendaCarrito){
                if(this.id === (prendaCarrito[tipoId]).toString()){
                    bandera = false
                    let config = {
                        method : "PATCH",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "cantidad": prendaCarrito["cantidad"] + 1
                        })
                    }
                    await fetch(`http://localhost:3000/carrito/${prendaCarrito["id"].toString()}`, config)
                }
            }
        });
        if(bandera){
            let config = {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    [tipoId] : this.id,
                    "cantidad": 1
                })
            }
            await fetch(`http://localhost:3000/carrito/`, config)
        }
        await this.updateTotalCarrito();
        calcularCantidadCarrito()
        toastr.info('Producto agregado al carrito', '¡Eso es!');
    }

    async updateTotalCarrito() {
        const carritoTotalElement = document.querySelector("my-cart-btns");
        if (carritoTotalElement) {
            await carritoTotalElement.calcularTotalCarrito();
        }
    }

}