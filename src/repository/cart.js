// import { } from '../model/cartSchema.js'
//var ObjectId = require('mongoose').Types.ObjectId;
const cart = require("../model/cartSchema")
const cartRepository = {}

cartRepository.insert = async function insert(cartRequest){
    try {
        cartRequest['status'] = true;
        const newCartData = await cart.create(cartRequest)
        return newCartData
    } catch (err) {
        console.error(err)
        return err
    }
}

cartRepository.listAllCarts = async function listAllCarts(){
    try {
        const allCarts = await cart.find({})
        return allCarts
    } catch (err){
        console.error(err)
        return err
    }
}

cartRepository.getCarByid = async function getCarByid(id){
    try {
        const cartData = await cart.findOne({"_id":id})
        return cartData
    } catch (err){
        console.error(err)
        return err
    }
}
cartRepository.cartByClientid = async function cartByClientid(clientId){
    let cartData = {}
    try {
        var query = {"clientId": clientId, "status": true}
        const cartData = await cart.findOne(query)
        // cart.findOne(query)
        // .then((res) => {
        //     cartData = res
        // }  )
        // .catch((err) => console.error(err))

        return cartData
    } catch (err){
        console.error(err)
        return null;
    }
}


cartRepository.deleteCarById = async function deleteCarById(id){
    try {
        const cartData = await cart.findOneAndRemove({"_id":id})
        return cartData || {id: id}
    } catch (err){
        console.error(err)
        return err
    }
}

//https://stackoverflow.com/questions/42474045/mongoose-remove-element-in-array-using-pull/42474970
cartRepository.updateRemoveProductList = async function updateRemoveProductList(cartRequest){
    console.log(cartRequest.id)
    try {
        const query = {"_id": cartRequest['id']};
        const updateIn = {
            $pull :  { "productListId":  cartRequest['productListId'][0] } 
        };
        const options = { "new": true }; 
        const safe = { "safe": true, "upsert": true };
        //findByIdAndUpdate
        console.log('print3')
        const updatedCar = await cart.findOneAndUpdate(query, updateIn, options)
        console.log('print4')
        return updatedCar
        //return res.status(200).json(node.productListId);
    } catch (err){
        console.error(err)
        return err
        //return handleError(res, err); 
    }
}

cartRepository.updateProductList = async function updateProductList(cartRequest){
    try {
        const query = {"_id": cartRequest['id']}
        const updateIn = {
            $push:{ "productListId": cartRequest['productListId'][0]},
        }
        const options = { "new": true }; 
        const updatedCar = await cart.findOneAndUpdate(query, updateIn,options)
        return updatedCar
    } catch (err){
        console.error(err)
        return err
    }
}

cartRepository.updateStatus = async function updateStatus(cartRequest){
    try {
        const query = { "_id" : cartRequest.id}
        const updateIn = {"status": cartRequest['status']}
        const options = { "new" : true }; 
        const updatedCar = await cart.findOneAndUpdate(query, updateIn, options)
        return updatedCar
    } catch (err){
        console.error(err)
        return err
    }
}

module.exports = cartRepository