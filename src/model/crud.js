import { modelCar } from '../db/connectionDB.js'


 //modelCar.find({id: 22})
 //modelCar.deleteOne({id: 22})

export function insert(car){
    try {
        const newCar = new modelCar(car)
        newCar.save()
        return newCar
    } catch (error) {
        console.error(error)
    }
    return null
}


export function getAllCar(){
    let allCars = []
    const cursor = modelCar.find({}).cursor();
    //for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
    //  allCars.append(doc)
    //}
    return allCars
}