import { modelCar } from '../db/carrinhoSchema.js'

export async function insert(car){
    try {
        //const newCar = new modelCar(car)
        //await newCar.save()
        const newCar = await modelCar.create(car)
        return newCar
    } catch (err) {
        console.error(err)
        return err
    }
}

export async function getAllCar(){
    try {
        const cars = await modelCar.find({})
        return cars
    } catch (err){
        console.error(err)
        return err
    }
}

export async function getCarByid(id){
    try {
        const car = await modelCar.findOne({_id:id})
        return car
    } catch (err){
        console.error(err)
        return err
    }
}

export async function deleteCarById(id){
    try {
        const car = await modelCar.findOneAndRemove({_id:id})
        return car || {id: id}
    } catch (err){
        console.error(err)
        return err
    }
}

export async function updateProductList(car){
    try {
        const query = {_id: car['id']}
        const x = {
            $push:{ listaProdutosIds: car['listaProdutosIds'][0]},
        }
        const options = { new: true }; 
        const updatedCar = await modelCar.findOneAndUpdate(query, x, options)
        return updatedCar
    } catch (err){
        console.error(err)
        return err
    }
}

export async function updateStatus(car){
    try {
        const query = {_id: car['id']}
        const options = { new: true }; 
        const updatedCar = await modelCar.findOneAndUpdate(query, car, options)
        return updatedCar
    } catch (err){
        console.error(err)
        return err
    }
}