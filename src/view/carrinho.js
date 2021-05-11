//import { connect } from '../db/connectionDB'
//import { dbCarrinhos } from '../db/connectionDB.js'

import { insert, getAllCar, getCarByid, deleteCarById, updateCarById} from '../model/crud.js'

const createCarrinho = async (call, callback) => {
    const newCar = {
        'clienteId': call.request.car.clienteId,
        'ativo': call.request.car.ativo,
        'listaProdutosIds': call.request.car.listaProdutosIds,
    }
    const car = await insert(newCar)
    console.log('car: ', car)
    callback(null, {car: car}) 
}

const listAllCar = async (call, callback) => {
    const allCars = await getAllCar()
    callback(null, {cars: allCars})
}

const getCarrinhoByid = async (call, callback) => {
    console.log('call.request.id: ', call.request.id)
    const id = {'_id': call.request.id}
    const car = await getCarByid(id)
    console.log({car: car})
    callback(null, {car: car})
}

const updateCarrinhoById = async (call, callback) => {
    const newCar = {}
    if (call.request.car.clienteId != ""){
        newCar['clienteId'] = call.request.car.clienteId 
    }
    if (call.request.car.ativo != ""){
        newCar['ativo'] = call.request.car.ativo 
    }
    if (call.request.car.listaProdutosIds != ""){
        newCar['listaProdutosIds'] = call.request.car.listaProdutosIds 
    }
    if(call.request.car.id != "" ){
        newCar['id'] = call.request.car.id
        const car = await updateCarById(newCar)
        console.log('car: ', car)
        callback(null, {car: car}) 
    }
    console.log("newCar: ", newCar)
    callback(null, null)
}

const deleteCarrinhoById = async (call, callback) => {
    const id = {'_id': call.request.id}
    const car = await deleteCarById(id)
    console.log({car: car})
    callback(null, {car: car})
}

export{createCarrinho, listAllCar, getCarrinhoByid, updateCarrinhoById, deleteCarrinhoById}