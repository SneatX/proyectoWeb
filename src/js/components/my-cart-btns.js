import { LitElement, html, css } from "lit";
import { getAllCarrito, getClotheByCodeAndType } from "../modules/untils/apiService";

export class MyCartBtns extends LitElement{
    
    static styles = css`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Gugi", sans-serif;
    }
    .mainCarrito__total {
        position: sticky;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        padding: 20px;
    }
    #btnVaciarCarrito {
        border: 0;
        height: 50px;
        width: 250px;
        border-radius: 5px;
        font-size: 1rem;
        padding: 5px;
    }

    .btnVaciarCarrito:hover {
        cursor: pointer;
        background-color: var(--color-two);
    }

    .total__comprar {
        display: flex;
        align-items: center;
        padding: 10px 30px;
        border-radius: 10px;
        background-color: var(--color-two);
        width: 290px;
    }
    
    .comprar__precio {
        color: var(--color-three);
        width: 200px;
        font-size: 1em;
    }
    
    .btnComprar{
        border: 0;
        height: 50px;
        width: 150px;
        border-radius: 5px;
        font-size: 1.2em;
    }
    
    .btnComprar:hover, #btnVaciarCarrito:hover {
        background-color: var(--color-one);
        color: var(--color-three);
        cursor: pointer;
    }
    
    .carritoVacio {
        display: none;
    }
    
    .carritoVacio p {
        padding-top: 200px;
        font-size: 3em;
        text-align: center;
    }

    @media (min-width: 985px) {
        .mainCarrito__total {
            position: sticky;
            bottom: 0;
            display: flex;
            padding: 20px;
        }
    
        .mainCarrito__total>button:hover {
            cursor: pointer;
            background-color: var(--color-two);
        }
        .total__comprar {
            display: flex;
            align-items: center;
            gap: 30px;
            padding: 10px 30px;
            border-radius: 10px;
            background-color: var(--color-two);
        }
    
        .comprar__precio {
            color: var(--color-three);
        }
    
        .btnComprar:hover {
            background-color: var(--color-one);
            color: var(--color-three);
            cursor: pointer;
        }
    
        .carritoVacio {
            display: none;
        }
    
        .carritoVacio p {
            padding-top: 200px;
            font-size: 3em;
            text-align: center;
        }
    }
    `
    static properties ={
        totalCarrito :{type: Number}
    }

    connectedCallback(){
        super.connectedCallback()
        this.calcularTotalCarrito()
    }

    constructor(){
        super()
        this.totalCarrito = 0
    }

    render(){
        this.calcularTotalCarrito()
        return html`
        <div class="mainCarrito__total">
            <button @click="${this._VaciarCarrito}" id="btnVaciarCarrito">Vaciar Carrito</button>
            <div class="total__comprar">
                <div class="comprar__precio">
                    <h2>Total</h2>
                    <h2>$ ${this.totalCarrito}</h2>
                </div>
                <button class="btnComprar">Comprar</button>
            </div>
        </div>
        `
    }

    async _VaciarCarrito(){
        const contenedorItems = document.querySelector(".main__carrito")
        let data = await getAllCarrito()
        data.forEach(async prenda => {
            await fetch(`http://localhost:3000/carrito/${prenda.id}`, {
                method: "DELETE"
            })
        })
        contenedorItems.innerHTML= ""
        await this.calcularTotalCarrito()
    }

    async calcularTotalCarrito(){
        let aux = 0
        let data = await getAllCarrito()
        for(let i = 0; i < data.length; i++){
            let prenda = data[i]
            let dataPrenda
            if("camisetaId" in prenda){
                [dataPrenda] = await getClotheByCodeAndType(prenda.camisetaId, "camiseta")
            }
            if("pantalonId" in prenda){
                [dataPrenda] = await getClotheByCodeAndType(prenda.pantalonId, "pantalon")
            }
            if("abrigoId" in prenda){
                [dataPrenda] = await getClotheByCodeAndType(prenda.abrigoId, "abrigo")
            }
            aux += dataPrenda.precio * prenda.cantidad
        }
        this.totalCarrito = aux
    }

}