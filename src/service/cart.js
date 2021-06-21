// view/cart.js tem a responsabilidade de receber requisicoes do clint, e retornala.
// No arquivo .proto do gRPC definimos o 'contrato', 
// e por padrao no gRPC, valores 'bool' faltantes são por padrao 'false',
// 'int' faltantes sao por padrao 0,
// 'string' faltantes sao por padrao '' (string vazia)
// import { updateRemoveProductList,
//         cartByClientid, insert,
//         listAllCarts,
//         getCarByid,
//         deleteCarById,
//         updateStatus,
//         updateProductList
//         } from '../repository/cart.js'
    const cartRepository = require('../repository/cart.js')

    const updateRemoveProductList  = cartRepository.updateRemoveProductList
    const cartByClientid =  cartRepository.cartByClientid
    const insert = cartRepository.insert
    const listAllCarts = cartRepository.listAllCarts
    const getCarByid = cartRepository.getCarByid
    const deleteCarById = cartRepository.deleteCarById
    const updateStatus = cartRepository.updateStatus
    const updateProductList =    cartRepository.updateProductList


// import createGRPCError from 'create-grpc-error'
const createGRPCError = require('create-grpc-error')

const grpcMethods = {}

grpcMethods.createCart = createCart = async (call, callback) => {
    console.log("CREATE CART RODANDO")
    // const cartRequest = {
    //     'clientId': call.request.cart.clientId,
    //     'status': call.request.cart.status,
    //     'productListId': call.request.cart.productListId,
    // }
    // if(cartRequest['clientId'] !== ''){
    //     const cartData = await insert(cartRequest)
    //     console.log('cartData: ', cartData)
    //     callback(null, {"cart": cartData}) 
    // }else{
    //     console.log('cartRequest: ', cartRequest)
    //     const err = createGRPCError('Boom', 2000, { "ERROR_CODE": 'INVALID_TOKEN' })
    //     callback(err, null)
    // }
    callback({"car": {"id": "AQUIIIIII!@#$!@"}})
}

grpcMethods.getAllCarts =  getAllCarts = async (call, callback) => {
    console.log("LIST CART RODANDO")
    const allCarts = await listAllCarts()
    callback(null, {"carts": allCarts})
}

grpcMethods.getCartByid =  getCartById = async (call, callback) => {
    console.log("GET CART BY ID RODANDO");
    if(call.request.id != ""){
        const id = call.request.id
        const cartData = await getCarByid(id)
        console.log({"car": cartData})
        callback(null, {"cart": cartData})
    }else{
        console.log('call.request.id: VAZIO')
        callback("INTERNAL", {"cart": {"id": id}})
    }
}

grpcMethods.getCartByClientId =  getCartByClientId = async (call, callback) => {
    console.log("GET CART BY CLIENT ID");
    if(call.request.clientId != ""){
        const clientId = call.request.clientId
        if(clientId != null ){
            let cartData = await cartByClientid(clientId)
            console.log("Dentro da service" + cartData);
            if(cartData == null  || cartData.cart == {}   ){ //client yet no have cart
                const cartRequest = {
                    'clientId': clientId,
                    'status': true,
                }
                cartData =  await insert(cartRequest);
            }
            console.log({"cart": cartData})
            callback(null, {"cart": cartData})
        }
    }else{
        console.log('call.request.id: VAZIO')
        callback("INTERNAL", {"cart": {"id": null}}) 
    }
 
}

grpcMethods.updateStatusById =  updateStatusById = async (call, callback) => {
    console.log("UPDATE STATUS BY ID");
    const cartRequest = {}
    if(call.request.cart.id != ""){
        cartRequest['status'] = call.request.cart.status
        cartRequest['id'] = call.request.cart.id
        const cartData = await updateStatus(cartRequest)
        console.log('updatedCart3: ', cartData)
        callback(null, {"cart": cartData}) 
    }else{
        console.log('call.request', call.request)
        callback("INTERNAL", {"cart": {"id": id}})
    }
}

grpcMethods.updateRemoveOneProduct =  updateRemoveOneProduct = async (call, callback) => {
    console.log("UPDATE REMOVE ONE PRODUCT");
    try {
        console.log('print1')
        const cartRequest = {}
        if(call.request.cart.id != "" && call.request.cart.productListId != ""){
                cartRequest['productListId'] = call.request.cart.productListId
                cartRequest['id'] = call.request.cart.id
                console.log(cartRequest['id'])
                const cartData = await updateRemoveProductList(cartRequest)
                console.log('print5')
                console.log('updatedCart2: ', cartData)
                callback(null, {"cart": cartData}) 
        }else{
            console.log("cartRequest: ", cartRequest)
            callback("INTERNAL", {"cart": {"id": id}})
        }
    } catch (error) {
        console.log(error)
    }
}

grpcMethods.updateAddOneProduct =  updateAddOneProduct = async (call, callback) => {
    console.log("UPDATE ADD ONE PRODUCT");
    const cartRequest = {}
    if(call.request.cart.clientId != "" && call.request.cart.productListId != ""){
        cartRequest['productListId'] = call.request.cart.productListId
        cartRequest['clientId'] = call.request.cart.clientId
        let cart = await cartByClientid(cartRequest['clientId']);
        console.log("cart update product" + cart)
        if(cart._id == ""){
            // client yet no have cart
            callback(null, {"cart": {}}) 
        }else{
            cartRequest['id'] = cart._id
            const cartData = await updateProductList(cartRequest)
            console.log('updatedCarttt: ', cartData)
            callback(null, {"cart": cartData}) 
        }
    }else{
        console.log("cartRequest: ", cartRequest)
        callback("INTERNAL", {"cart": {"id": id}})
    }
}

grpcMethods.deleteCartById =  deleteCartById = async (call, callback) => {
    console.log("DELETE CART BY ID");
    if(call.request.id != ""){
        const id =  call.request.id
        const cartData = await deleteCarById(id)

        callback(null, {cart: cartData})
    }else{
        //fazer depois , caso o kaio lembre
        callback("INTERNAL", {"cart": {"id": "none"}})
    }
}

module.exports = grpcMethods