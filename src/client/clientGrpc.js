
const messages = require('../protocolBuffers/carrinho.proto');
const services = require('../protocolBuffers/carrinho.proto');
const grpc = require('@grpc/grpc-js');

function main() {
    const client = new services.UserSvcClient('localhost:8080', grpc.credentials.createInsecure());

    let registerReq = new messages.RegisterRequest();
    registerReq.setName("carrinho1");
    client.register(registerReq, function(err, response) {
        console.log(response);
    });
}

main();