import { LitElement, html, css } from "lit";


export class MycartItem extends LitElement{
    static properties = {
        src: { type: String },
        title: { type: String },
        cant: { type: String },
        priceU: { type: String },
        totalPrice: { type: String }
    }

    constructor() {
        super();
        this.src = '';
        this.title = '';
        this.cant = '';
        this.priceU = '';
        this.totalPrice = '';
    }

    static styles = css`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Gugi", sans-serif;
    }
    .carrito__item {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        border-radius: 30px;
        border: 2px solid white;
        background-color: rgba(0, 0, 0, 0.315);
        margin: 10px;
        text-transform: capitalize;
        text-shadow:
            -1px -1px 0 white,
            1px -1px 0 white,
            -1px 1px 0 white,
            1px 1px 0 white;
        padding: 20px;
        width: 88vw;
        height: 490px;
        flex-direction: column;
        align-content: center;
        gap: 7px;
    }

    .item__imgCarrito {
        display: flex;
        background:#fff;
        border-radius: 10px;
    }

    .item__imgCarrito img {
        width: 100px;
        max-height: 100px;
        -webkit-user-drag: none;
        object-fit: contain;
    }

    .item__nombreCarrito {
        width: 300px;
        text-align: center;
    }

    .item__nombreCarrito h2 {
        word-wrap: break-word;
        font-size: 1em;
    }

    .item__cantidadCarrito,
    .item__precioCarrito,
    .item__subTotalCarrito {
        font-size: 1.5em;
        text-align: center;
    }

    .item__cantidadCarrito div {
        background-color: var(--color-two);
        border-radius: 5px;
    }

    .item__eliminarCarrito i {
        font-size: 5em;
    }

    .item__eliminarCarrito i:hover {
        color: red;
        cursor: pointer;
    }

    @media (min-width: 985px) {
        .carrito__item {
            display: flex;
            justify-content: space-evenly;
            flex-direction: row;
            border-radius: 30px;
            border: 2px solid white;
            background-color: rgba(0, 0, 0, 0.315);
            text-transform: capitalize;
            text-shadow:
                -1px -1px 0 white,
                1px -1px 0 white,
                -1px 1px 0 white,
                1px 1px 0 white;
            width: 100%;
            height: 200px;
            gap: 0 25px;
        }
    
        .item__imgCarrito {
            display: flex;
        }
    
        .item__imgCarrito img {
            width: 100px;
            max-height: 100px;
            -webkit-user-drag: none;
            object-fit: contain;
        }
    
        .item__nombreCarrito {
            font-size: 1.5em;
            width: 300px;
        }
    
        .item__nombreCarrito h2 {
            word-wrap: break-word;
        }
    
        .item__cantidadCarrito,
        .item__precioCarrito,
        .item__subTotalCarrito {
            font-size: 1.5em;
            text-align: center;
        }
    
        .item__cantidadCarrito div {
            background-color: var(--color-two);
            border-radius: 5px;
        }
    
        .item__eliminarCarrito i {
            font-size: 5em;
        }
    
        .item__eliminarCarrito i:hover {
            color: red;
            cursor: pointer;
        }
    }
    `
    updated(changedProperties) {
        if (changedProperties.has('cant') || changedProperties.has('priceU')) {
            this.totalPrice = this.cant * this.priceU;
        }
    }


    render(){
        return html`
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
        <section class="carrito__item">
            <div class="item__imgCarrito">
                <img src="${this.src}">
            </div>
            <div class="item__nombreCarrito">
                <h2>${this.title}</h2>
            </div>
            <div class="item__cantidadCarrito">
                <p>Cantidad</p>
                <div>${this.cant}</div>
            </div>
            <div class="item__precioCarrito">
                <p>Precio</p>
                <p>$${this.priceU}</p>
            </div>
            <div class="item__subTotalCarrito">
                <p>SubTotal</p>
                <p>$${this.totalPrice}</p>
            </div>
            <div class="item__eliminarCarrito">
                <i class='bx bxs-trash'></i>
            </div>
        </section>
        `
    }
}

