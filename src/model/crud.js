import { tableCar } from '../db/connectionDB.js'


 //tableCar.find({id: 22})
 //tableCar.deleteOne({id: 22})

export function insert(car){
    const newCar = new tableCar(car)
    newCar.save()
    return newCar
}


export function getAllCar(){
    //const cursor = tableCar.find({}).cursor();
    //for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {}

    tableCar.find()  
    .then(function(doc) {  
      res.render('index', {items: doc});  
    }) 
}