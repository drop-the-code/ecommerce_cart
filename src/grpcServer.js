import { loadPackageDefinition, Server, ServerCredentials } from '@grpc/grpc-js'
import { resolve } from 'path'
import { loadSync } from '@grpc/proto-loader'

const PROTO_PATH = resolve('./src/model/protocolBuffers/cart.proto')
const packageDefinition = loadSync(PROTO_PATH,{})
const protoDescriptor = loadPackageDefinition(packageDefinition)
const packagePB = protoDescriptor.packagePB

import {getCartByClientId, createCart, getCartById, getAllCarts, UpdateAddOneProduct, updateStatusById, deleteCartById } from './view/cart.js'

export function runServer() {
    const instanceServer = new Server()
    // realiza bind/ligacao com o arquivo .proto
    instanceServer.addService(packagePB.cartService.service, {
      "GetAllCarts"         : getAllCarts,
      "GetCart"             : getCartById,
      "UpdateAddOneProduct" : UpdateAddOneProduct,
      "UpdateStatus"        : updateStatusById,
      "CreateCart"          : createCart,
      "DeleteCart"          : deleteCartById,
      "GetCartByClientId"   : getCartByClientId,
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