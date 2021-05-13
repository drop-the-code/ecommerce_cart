import { modelCar } from '../db/carrinhoSchema.js'

export async function insert(cartRequest){
    try {
        const newCartData = await modelCar.create(cartRequest)
        return newCartData
    } catch (err) {
        console.error(err)
        return err
    }
}

export async function listAllCarts(){
    try {
        const allCarts = await modelCar.find({})
        return allCarts
    } catch (err){
        console.error(err)
        return err
    }
}

export async function getCarByid(id){
    try {
        const cartData = await modelCar.findOne({_id:id})
        return cartData
    } catch (err){
        console.error(err)
        return err
    }
}

export async function deleteCarById(id){
    try {
        const cartData = await modelCar.findOneAndRemove({_id:id})
        return cartData || {id: id}
    } catch (err){
        console.error(err)
        return err
    }
}

export async function updateProductList(cartRequest){
    try {
        const query = {_id: cartRequest['id']}
        const updateIn = {
            $push:{ listaProdutosIds: cartRequest['listaProdutosIds'][0]},
        }
        const options = { new: true }; 
        const updatedCar = await modelCar.findOneAndUpdate(query, updateIn, options)
        return updatedCar
    } catch (err){
        console.error(err)
        return err
    }
}

export async function updateStatus(cartRequest){
    try {
        const query = {_id: cartRequest['id']}
        const updateIn = {
            $push:{ listaProdutosIds: cartRequest['listaProdutosIds'][0]},
        }
        const options = { new: true }; 
        const updatedCar = await modelCar.findOneAndUpdate(query, cartRequest, options)
        return updatedCar
    } catch (err){
        console.error(err)
        return err
    }
}