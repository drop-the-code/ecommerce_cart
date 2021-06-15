import { modelCar } from '../db/cartSchema.js'

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
export async function getCartByClientid(clientId){
    try {
        const cartData = await modelCar.findOne({clientId:clientId})
        return cartData
    } catch (err){
        console.error(err)
        return err
    }
}
getCartByClientid

export async function deleteCarById(id){
    try {
        const cartData = await modelCar.findOneAndRemove({_id:id})
        return cartData || {id: id}
    } catch (err){
        console.error(err)
        return err
    }
}

//https://stackoverflow.com/questions/42474045/mongoose-remove-element-in-array-using-pull/42474970
export async function updateRemoveProductList(cartRequest){
    try {
        const query = {_id: cartRequest['id']}
        const updateIn = {
            $pull:{ productListId: cartRequest['productListId'][0]},
        }
        const options = { new: true }; 
        const safe = { safe: true, upsert: true };
        //findByIdAndUpdate
        const updatedCar = await modelCar.findOneAndUpdate(query, updateIn, options, safe)
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
        const updateIn = {status: cartRequest['status']}
        const options = { new: true }; 
        const updatedCar = await modelCar.findOneAndUpdate(query, updateIn, options)
        return updatedCar
    } catch (err){
        console.error(err)
        return err
    }
}