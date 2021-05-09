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
    /*
    modelCar.find({}, function(err, cars){
        cars.forEach(function(car){
            allCars.push(car)
        })
    })
    */
    /*
    for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
      allCars.push(doc)
    }
    */
    modelCar.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            console.log(result.json(result))
            result.json(result);
            return result.json(result)
        }
    });
    //console.log(cursor)
    return null
}


export function getCarById(id){
    return modelCar.find(id, function(err, carFound){
        console.log({car: carFound[0]})
        return carFound[0]
    })
}