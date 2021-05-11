import { modelCar } from '../db/connectionDB.js'

export async function insert(car){
    try {
        const newCar = await new modelCar(car)
        newCar.save()
        return newCar
    } catch (error) {
        console.error(error)
    }
    return null
}

export async function getAllCar(){
    try {
        const cars = await modelCar.find({})
        return cars
    } catch (err){
        console.err(err)
    }
}

export async function getCarByid(id){
    try {
        const car = await modelCar.findOne({_id:id})
        return car
    } catch (err){
        console.err(err)
        return null
    }
}

export async function deleteCarById(id){
    try {
        const car = await modelCar.deleteOne({_id:id})
        return car
    } catch (err){
        console.err(err)
        return null
    }
}

export async function updateCarById(car){
    try {
        const query = {_id: car['id']}
        const options = { new: true }; 
        const updatedCar = await modelCar.findOneAndUpdate(query, car, options)
        return updatedCar
    } catch (err){
        console.err(err)
        return null
    }
}