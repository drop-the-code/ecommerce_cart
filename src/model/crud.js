import { modelCar } from '../db/connectionDB.js'

//modelCar.find({id: 22})
//modelCar.deleteOne({id: 22})

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
        // Tratar erro
        console.err(err)
        return null
    }
}

export async function deleteCarById(id){
    try {
        const car = await modelCar.delete({_id:id})
        return car
    } catch (err){
        // Tratar erro
        console.err(err)
        return null
    }
}