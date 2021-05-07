
const grpc = require('@grpc/grpc-js');
//const messages = require('../protocolBuffers/carrinho.proto');
//const services = require('../protocolBuffers/carrinho.proto');
const loader = require('@grpc/proto-loader')
const package = loader.loadSync('../protocolBuffers/carrinho.proto', {})
const object = grpc.loadPackageDefinition(package)
const packagePB = object.packagePB;

function main() {
    const clientGrpc = new packagePB.carrinhoService('localhost:50051', grpc.credentials.createInsecure());
    //let registerReq = new messages.RegisterRequest();
    //registerReq.setName("carrinho1");
    clientGrpc.CreateCarrinho({id: 1}, function(err, response) {
        console.log(response);
    });
}

main();