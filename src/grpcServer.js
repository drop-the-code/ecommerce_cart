import { loadPackageDefinition, Server, ServerCredentials } from '@grpc/grpc-js';
import { resolve } from 'path';
import {} from 'dotenv/config'
const PROTO_PATH = resolve('model/protocolBuffers/carrinho.proto')
import { loadSync } from '@grpc/proto-loader';
const packageDefinition = loadSync(PROTO_PATH,{});
const protoDescriptor = loadPackageDefinition(packageDefinition);
const packagePB = protoDescriptor.packagePB;

// importa funcoes
//const views = require('./view/carrinho.js')
import { createCarrinho, getCarrinhoById, listAllCar, updateCarrinhoById} from './view/carrinho.js';

export function getServer() {
    const server = new Server();
    // realiza bind/ligacao com o arquivo .proto
    server.addService(packagePB.carrinhoService.service, {
      "ListAllCar": listAllCar,
      "GetCarrinhoById": getCarrinhoById,
      "UpdateCarrinhoById": updateCarrinhoById,
      "CreateCarrinho": createCarrinho,
    });
    //const address = process.env.HOST + ":" + process.env.PORT;
    const address = '0.0.0.0:50051';
    server.bindAsync(address, ServerCredentials.createInsecure(), () => {
        //if server != error{
            console.log("gRPC Server running at " + address);
            server.start();
            return server;
        //}else{ console.log(error) }
    });
    return server;
}

// export {getServer}



