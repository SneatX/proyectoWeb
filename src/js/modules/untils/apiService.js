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

export const getClotheByCodeAndType = async(id, type)=>{
    return await(await fetch(`http://localhost:3000/${type}?id=${id}`)).json()
}

export const getClotheById = async(id, tipo) =>{
    return await(await fetch(`http://localhost:3000/${tipo}/${id}`)).json()
}