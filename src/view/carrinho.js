//import { connect } from '../db/connectionDB'
import { dbCarrinhos } from '../db/connectionDB.js'


const createCarrinho =  (call, callback) => {
    const idCar = call.request.car.id

    const car = dbCarrinhos.find((car) => car.uuid == idCar)
    callback(null, {car: car}) 
}

const listAllCar = (call, callback) => {
    callback(null, dbCarrinhos)
}

const getCarrinhoById = (call, callback) => {
    callback(null, null)
}

const updateCarrinhoById = (call, callback) => {
    callback(null, null)
}

export{createCarrinho, listAllCar, getCarrinhoById, updateCarrinhoById}
