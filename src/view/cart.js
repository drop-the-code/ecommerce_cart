// view/cart.js tem a responsabilidade de receber requisicoes do clint, e retornala.
// No arquivo .proto do gRPC definimos o 'contrato', 
// e por padrao no gRPC, valores 'bool' faltantes são por padrao 'false',
// 'int' faltantes sao por padrao 0,
// 'string' faltantes sao por padrao '' (string vazia)
import { insert, listAllCarts, getCarByid, deleteCarById, updateStatus, updateProductList} from '../model/cart.js'

export const createCart = async (call, callback) => {
    const cartRequest = {
        'clientId': call.request.cart.clientId,
        'status': call.request.cart.status,
        'productListId': call.request.cart.productListId,
    }
    if(cartRequest['clientId'] != '' && cartRequest['productListId'] != ''){
        const cartData = await insert(cartRequest)
        console.log('cartData: ', cartData)
        callback(null, {cart: cartData}) 
    }else{
        console.log('cartRequest: ', cartRequest)
        callback('INTERNAL', null)
    }
}

export const getAllCarts = async (call, callback) => {
    const allCarts = await listAllCarts()
    callback(null, {carts: allCarts})
}

export const getCartById = async (call, callback) => {
    if(call.request.id != ""){
        const id = call.request.id
        const cartData = await getCarByid(id)
        console.log({car: cartData})
        callback(null, {cart: cartData})
    }else{
        console.log('call.request.id: VAZIO')
        callback("INTERNAL", {cart: {id: id}})
    }
}


export const updateStatusById = async (call, callback) => {
    const cartRequest = {}
    if(call.request.cart.id != ""){
        cartRequest['status'] = call.request.cart.status
        cartRequest['id'] = call.request.cart.id
        const cartData = await updateStatus(cartRequest)
        console.log('updatedCart: ', cartData)
        callback(null, {cart: cartData}) 
    }else{
        console.log('call.request', call.request)
        callback("INTERNAL", {cart: {id: id}})
    }
}

export const UpdateAddOneProduct = async (call, callback) => {
    const cartRequest = {}
    if(call.request.cart.id != "" && call.request.cart.productListId != ""){
        cartRequest['productListId'] = call.request.cart.productListId
        cartRequest['id'] = call.request.cart.id
        const cartData = await updateProductList(cartRequest)
        console.log('updatedCart: ', cartData)
        callback(null, {cart: cartData}) 
    }else{
        console.log("cartRequest: ", cartRequest)
        callback("INTERNAL", {cart: {id: id}})
    }
}

export const deleteCartById = async (call, callback) => {
    if(call.request.id != ""){
        const id =  call.request.id
        const cartData = await deleteCarById(id)
        callback(null, {cart: cartData})
    }
    console.log({cart: {id: id}})
    callback("INTERNAL", {cart: {id: id}})
}