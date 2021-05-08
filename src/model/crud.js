import { tableCar } from '../db/connectionDB.js'


// tableCar.find({id: 22});
// tableCar.deleteOne({id: 22});

export function insert(car){
    return tableCar.insert(car);
}