const grpc = require('@grpc/grpc-js');
const db = require('db/connectionDB.js')
require('dotenv').config();
const PROTO_PATH = path.resolve('src/protocolBuffers/carrinho.proto')

//const path = require('path')
/*
const protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var routeguide = protoDescriptor.routeguide;
*/

/*
server.addService(carrinhoProto.carrinhoService.service, {
    list: (_, callback) => {
        callback(null, carrinhos)
    },
})
*/

const carrinhos = [
  { id: '1', clienteId: '1', listaProdutosId: '[1,2,3,4,5]', dataEmitido: '04/05/2021', ativo: true },
  { id: '2', clienteId: '2', listaProdutosId: '[6,7,8,9,10]', dataEmitido: '05/05/2021', ativo: false },
]

function getServer() {
    var server = new grpc.Server();
    server.addService(carrinhoProto.carrinhoService.service, {
      carrinhos: carrinhos,
    });
    return server;
  }

/*
function sayHello(call, callback) {
  callback(null, {message: 'Hello ' + call.request.name});
}
*/

function main(){
  await db.connect().catch(console.dir);

  var routeServer = getServer();
  //const address = process.env.HOST + ":" + process.env.PORT;
  const address = '0.0.0.0:50051';
  routeServer.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
    //if routeServer != error{
      routeServer.start();
    //}
    console.log("Server running at " + address);
  });

 }
  
 main()

 //https://hackernoon.com/building-user-service-with-grpc-nodejs-and-mongodb-the-complete-microservice-tutorial-part-2-jkw34pt