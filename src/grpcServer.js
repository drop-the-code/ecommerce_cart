import { loadPackageDefinition, Server, ServerCredentials } from '@grpc/grpc-js'
import { resolve } from 'path'
const PROTO_PATH = resolve('./src/model/protocolBuffers/carrinho.proto')
import { loadSync } from '@grpc/proto-loader'
const packageDefinition = loadSync(PROTO_PATH,{})
const protoDescriptor = loadPackageDefinition(packageDefinition)
const packagePB = protoDescriptor.packagePB

import { createCarrinho, getCarrinhoByid, listAllCar, updateProductListById, deleteCarrinhoById } from './view/carrinho.js'

export function getServer() {
    const instanceServer = new Server()
    // realiza bind/ligacao com o arquivo .proto
    instanceServer.addService(packagePB.carrinhoService.service, {
      "ListAllCar": listAllCar,
      "GetCarrinhoByid": getCarrinhoByid,
      "UpdateProductListById": updateProductListById,
      "CreateCarrinho": createCarrinho,
      "DeleteCarrinhoById": deleteCarrinhoById,
    })
    const port = process.env.SERVER_PORT || 50051
    const host = process.env.SERVER_HOST || '0.0.0.0'
    const address = host + ":" + port
    instanceServer.bindAsync(address, ServerCredentials.createInsecure(), () => {
        //if (instanceServer != error) {
            instanceServer.start()
            return "gRPC Server running at " + address
        //}else{ console.log(error) }
    })
    return "gRPC Server running at " + address
}