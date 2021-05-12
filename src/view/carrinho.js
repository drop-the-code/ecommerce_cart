import { insert, getAllCar, getCarByid, deleteCarById, updateStatus, updateProductList} from '../model/crud.js'

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

const updateProductListById = async (call, callback) => {
    const newCar = {}
    if(call.request.car.id != "" && call.request.car.listaProdutosIds != ""){
        newCar['listaProdutosIds'] = call.request.car.listaProdutosIds
        newCar['id'] = call.request.car.id
        const car = await updateProductList(newCar)
        console.log('requestCar: ', car)
        callback(null, {car: car}) 
    }else{
        console.log("newCar: ", newCar)
        callback("INTERNAL", null)
    }
}

const deleteCarrinhoById = async (call, callback) => {
    
    const id =  call.request.id
    const car = await deleteCarById(id)
    console.log({car: car})
    callback(null, {car: car})
}

export{createCarrinho, listAllCar, getCarrinhoByid, updateProductListById, deleteCarrinhoById}