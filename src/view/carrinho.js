//import { connect } from '../db/connectionDB'
//import { dbCarrinhos } from '../db/connectionDB.js'

import { insert, getAllCar} from '../model/crud.js'

const createCarrinho =  (call, callback) => {
    //const idCar = call.request.car.id
    //const car = dbCarrinhos.find((car) => car.uuid == idCar)
    const newCar = {
        //'id': call.request.car.id,
        'clienteId': call.request.car.clienteId,
        'dataEmitido': call.request.car.dataEmitido,
        'ativo': call.request.car.ativo,
        'listaProdutosIds': call.request.car.listaProdutosIds,
    }
    const car = insert(newCar)
    console.log("novo carro criado")
    console.log(newCar)
    callback(null, {car: car}) 
}

const listAllCar = (call, callback) => {
    const allCars = getAllCar()
    callback(null, {cars: allCars})
}

const getCarrinhoById = (call, callback) => {
    callback(null, null)
}

const updateCarrinhoById = (call, callback) => {
    callback(null, null)
}

export{createCarrinho, listAllCar, getCarrinhoById, updateCarrinhoById}
