import { modelCart } from '../model/cartSchema.js'
//var ObjectId = require('mongoose').Types.ObjectId;

export async function insert(cartRequest){
    try {
        cartRequest['status'] = true;
        const newCartData = await modelCart.create(cartRequest)
        return newCartData
    } catch (err) {
        console.error(err)
        return err
    }
}

export async function listAllCarts(){
    try {
        const allCarts = await modelCart.find({})
        return allCarts
    } catch (err){
        console.error(err)
        return err
    }
}

export async function getCarByid(id){
    try {
        const cartData = await modelCart.findOne({_id:id})
        return cartData
    } catch (err){
        console.error(err)
        return err
    }
}
export async function cartByClientid(clientId){
    try {
        var query = {clientId:clientId, status:true}
        const cartData = await modelCart.findOne(query)
        return cartData
    } catch (err){
        console.error(err)
        return err
    }
}


export async function deleteCarById(id){
    try {
        const cartData = await modelCart.findOneAndRemove({_id:id})
        return cartData || {id: id}
    } catch (err){
        console.error(err)
        return err
    }
}

//https://stackoverflow.com/questions/42474045/mongoose-remove-element-in-array-using-pull/42474970
export async function updateRemoveProductList(cartRequest){
    try {
        const query = {_id: cartRequest['id']};
        const updateIn = {
            $pull:{ productListId: {$eq:cartRequest['productListId'][0]}},//$eq equals
        };
        const options = { new: true }; 
        const safe = { safe: true, upsert: true };
        //findByIdAndUpdate
        console.log('print3')
        const updatedCar = await modelCart.findOneAndUpdate(query, updateIn, options)
        console.log('print4')
        return updatedCar
        //return res.status(200).json(node.productListId);
    } catch (err){
        console.error(err)
        return err
        //return handleError(res, err); 
    }
}

export async function updateProductList(cartRequest){
    try {
        const query = {_id: cartRequest['id']}
        const updateIn = {
            $push:{ productListId: cartRequest['productListId'][0]},
        }
        const options = { new: true }; 
        const updatedCar = await modelCart.findOneAndUpdate(query, updateIn, options)
        return updatedCar
    } catch (err){
        console.error(err)
        return err
    }
}

export async function updateStatus(cartRequest){
    try {
        const query = {_id: cartRequest['id']}
        const updateIn = {status: cartRequest['status']}
        const options = { new: true }; 
        const updatedCar = await modelCart.findOneAndUpdate(query, updateIn, options)
        return updatedCar
    } catch (err){
        console.error(err)
        return err
    }
}