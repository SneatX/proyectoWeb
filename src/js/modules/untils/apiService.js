export const getAllAbrigos = async()=>{
    return await(await fetch("http://localhost:3000/abrigo")).json()
}

export const getAllCamisetas = async()=>{
    return await(await fetch("http://localhost:3000/camiseta")).json()
}

export const getAllPantalones = async()=>{
    return await(await fetch("http://localhost:3000/pantalon")).json()
}

export const getAllCarrito = async()=>{
    return await(await fetch("http://localhost:3000/carrito")).json()
}