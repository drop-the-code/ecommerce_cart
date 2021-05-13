import { insert, listAllCarts, getCarByid, deleteCarById, updateStatus, updateProductList} from '../model/carrinho.js'

export const createCart = async (call, callback) => {
    const cartRequest = {
        'clienteId': call.request.car.clienteId,
        'ativo': call.request.car.ativo,
        'listaProdutosIds': call.request.car.listaProdutosIds,
    }
    if(cartRequest['clienteId'] != '' && cartRequest['ativo'] != '' && cartRequest['listaProdutosIds'] != ''){
        const cartData = await insert(cartRequest)
        console.log('cartData: ', cartData)
        callback(null, {car: cartData}) 
    }else{
        console.log('cartRequest: ', cartRequest)
        callback('INTERNAL', null)
    }
}

export const getAllCarts = async (call, callback) => {
    const allCarts = await listAllCarts()
    callback(null, {cars: allCarts})
}

export const getCartById = async (call, callback) => {
    if(call.request.id != ""){
        const id = call.request.id
        const cartData = await getCarByid(id)
        console.log({car: cartData})
        callback(null, {car: cartData})
    }else{
        console.log('call.request.id: VAZIO')
        callback("INTERNAL", {car: {id: id}})
    }
}

export const updateStatusById = async (call, callback) => {
    const cartRequest = {}
    if(call.request.car.id != "" && call.request.car.status != ""){
        cartRequest['status'] = call.request.car.status
        cartRequest['id'] = call.request.car.id
        const cartData = await updateStatus(cartRequest)
        console.log('updatedCart: ', cartData)
        callback(null, {car: cartData}) 
    }else{
        console.log("cartRequest: ", cartRequest)
        callback("INTERNAL", {car: {id: id}})
    }
}

export const updateProductListById = async (call, callback) => {
    const cartRequest = {}
    if(call.request.car.id != "" && call.request.car.listaProdutosIds != ""){
        cartRequest['listaProdutosIds'] = call.request.car.listaProdutosIds
        cartRequest['id'] = call.request.car.id
        const cartData = await updateProductList(cartRequest)
        console.log('updatedCart: ', cartData)
        callback(null, {car: cartData}) 
    }else{
        console.log("cartRequest: ", cartRequest)
        callback("INTERNAL", {car: {id: id}})
    }
}

export const deleteCartById = async (call, callback) => {
    if(call.request.id != ""){
        const id =  call.request.id
        const cartData = await deleteCarById(id)
        callback(null, {car: cartData})
    }
    console.log({car: {id: id}})
    callback("INTERNAL", {car: {id: id}})
}