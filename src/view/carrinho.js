//import { connect } from '../db/connectionDB'
//import { dbCarrinhos } from '../db/connectionDB.js'

import { insert, getAllCar, getCarByid, deleteCarById} from '../model/crud.js'

const createCarrinho =  (call, callback) => {
    //const idCar = call.request.car.id
    //const car = dbCarrinhos.find((car) => car.id == idCar)
    const newCar = {
        'clienteId': call.request.car.clienteId,
        'ativo': call.request.car.ativo,
        'listaProdutosIds': call.request.car.listaProdutosIds,
    }
    const car = insert(newCar)
    console.log('car: ', car)
    callback(null, {car: car}) 
}

const listAllCar = (call, callback) => {
    const allCars = getAllCar()
    callback(null, {cars: allCars})
}

const getCarrinhoByid = async (call, callback) => {
    console.log('call.request.id: ', call.request.id)
    const id = {'_id': call.request.id}
    const car = await getCarByid(id)
    console.log({car: car})
    callback(null, {car: car})
}

const updateCarrinhoById = (call, callback) => {
    callback(null, null)
}

const deleteCarrinhoById = async (call, callback) => {
    const id = {'_id': call.request.id}
    const car = await deleteCarById(id)
    callback(null, {car: car})
}

export{createCarrinho, listAllCar, getCarrinhoByid, updateCarrinhoById, deleteCarrinhoById}