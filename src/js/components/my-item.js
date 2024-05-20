import { LitElement, html, css } from "lit"

export class MyItem extends LitElement{
    static properties = {
        src: { type: String },
        title: { type: String },
        price: { type: String }
      };
    
      constructor() {
        super();
        this.src = '';
        this.title = '';
        this.price = '';
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
        background-color: rgba(0, 0, 0, 0.315);
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
        width: 1%;
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
        height: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
    
    .item__info>h2 {
        font-size: 1.3em;
        text-align: center;
        text-shadow:
            -1px -1px 0 white,
            1px -1px 0 white,
            -1px 1px 0 white,
            1px 1px 0 white;
    }

    .info__add>h2 {
        font-size: 1em;
    }
    
    .info__add {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
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
                <h2>${this.title}</h2>
                <div class="info__add">
                    <h2>${this.price}</h2>
                    <button @click="${this._AddToCart}">Agregar</button>
                </div>
            </div>
        </section>
        `;
    }


    _AddToCart() {
        console.log(`${this.title} agregado al carrito`);
        
    }

}