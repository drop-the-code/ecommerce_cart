// import { loadPackageDefinition, Server, ServerCredentials } from '@grpc/grpc-js'
// import { resolve } from 'path'
// import { loadSync } from '@grpc/proto-loader'
const grpc = require("@grpc/grpc-js")
const loadPackageDefinition = grpc.loadPackageDefinition
const Server = grpc.Server
const ServerCredentials = grpc.ServerCredentials
const path = require('path')
const resolve = path.resolve
const grpcProtoLoader = require("@grpc/proto-loader")
const loadSync = grpcProtoLoader.loadSync

const PROTO_PATH = resolve('./src/model/protocolBuffers/cart.proto')
const packageDefinition = loadSync(PROTO_PATH,{})
const protoDescriptor = loadPackageDefinition(packageDefinition)
const packagePB = protoDescriptor.packagePB
    const grpcMethods = require('./service/cart')
    const updateRemoveOneProduct = grpcMethods.updateRemoveOneProduct
    const getCartByClientId = grpcMethods.getCartByClientId
    const createCart = grpcMethods.createCart
    const getCartById = grpcMethods.getCartByid
    const getAllCarts = grpcMethods.getAllCarts
    const updateAddOneProduct = grpcMethods.updateAddOneProduct
    const updateStatusById = grpcMethods.updateStatusById
    const deleteCartById = grpcMethods.deleteCartById
        
const runServer  =  function runServer() {
    const instanceServer = new Server()
    // realiza bind/ligacao com o arquivo .proto
    instanceServer.addService(packagePB.cartService.service, {
      "GetAllCarts"            : getAllCarts,
      "GetCart"                : getCartById,
      "UpdateAddOneProduct"    : updateAddOneProduct,
      "UpdateRemoveOneProduct" : updateRemoveOneProduct,
      "UpdateStatus"           : updateStatusById,
      "CreateCart"             : createCart,
      "DeleteCart"             : deleteCartById,
      "GetCartByClientId"      : getCartByClientId,
    })
    const port = process.env.SERVER_PORT //|| 50051
    const host = process.env.SERVER_HOST //|| '0.0.0.0'
    const address = host + ":" + port
    instanceServer.bindAsync(address, ServerCredentials.createInsecure(), () => {
        //if (instanceServer != error) {
            instanceServer.start()
            return "gRPC Server running at " + address
        //}else{ console.log(error) }
    })
    return "gRPC Server running at " + address
}

module.exports = runServer