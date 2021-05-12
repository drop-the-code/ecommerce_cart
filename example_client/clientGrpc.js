//https://github.com/grpc/grpc/blob/v1.37.1/examples/node/dynamic_codegen/route_guide/route_guide_client.js

import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
//const messages = require('../protocolBuffers/carrinho.proto');
//const services = require('../protocolBuffers/carrinho.proto');
import { loadSync } from '@grpc/proto-loader';
const pkg = loadSync('../src/model/protocolBuffers/carrinho.proto', {})
const object = loadPackageDefinition(pkg)
const packagePB = object.packagePB;

function main() {
    const clientGrpc = new packagePB.carrinhoService('localhost:50051', credentials.createInsecure());
    //let registerReq = new messages.RegisterRequest();
    //registerReq.setName("carrinho1");
    clientGrpc.CreateCarrinho({id: 1}, function(err, response) {
        console.log(response);
    });
}

main();