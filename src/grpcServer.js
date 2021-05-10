import { loadPackageDefinition, Server, ServerCredentials } from '@grpc/grpc-js'
import { resolve } from 'path'
const PROTO_PATH = resolve('model/protocolBuffers/carrinho.proto')
import { loadSync } from '@grpc/proto-loader'
const packageDefinition = loadSync(PROTO_PATH,{})
const protoDescriptor = loadPackageDefinition(packageDefinition)
const packagePB = protoDescriptor.packagePB

//import {initializeEnvironmentVariables, getEnvPath} from './config/index.js'

// importa funcoes

import { createCarrinho, getCarrinhoByid, listAllCar, updateCarrinhoById } from './view/carrinho.js'

export function getServer() {
    const instanceServer = new Server()
    // realiza bind/ligacao com o arquivo .proto
    instanceServer.addService(packagePB.carrinhoService.service, {
      "ListAllCar": listAllCar,
      "GetCarrinhoByid": getCarrinhoByid,
      "UpdateCarrinhoById": updateCarrinhoById,
      "CreateCarrinho": createCarrinho,
    })
    
    const port = process.env.PORT || 50051
    const host = process.env.HOST || '0.0.0.0'
    const address = host + ":" + port
    //const address = '0.0.0.0:50051'
    instanceServer.bindAsync(address, ServerCredentials.createInsecure(), () => {
        //if (instanceServer != error) {
            instanceServer.start()
            console.log("gRPC Server running at " + address)
            return instanceServer
        //}else{ console.log(error) }
    })
    return instanceServer
}