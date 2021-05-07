const grpc = require('@grpc/grpc-js');
const path = require('path')
require('dotenv').config();
const PROTO_PATH = path.resolve('protocolBuffers/carrinho.proto')
const protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {}
    /*{keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    }*/
  );

var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var packagePB = protoDescriptor.packagePB;


const dbCarrinhos = [
  { id:'11' ,uuid: '11', clienteId: '1', listaProdutosId: [1,2,3,4,5], listaProdutosIds: [1,2,3,4,5],dataEmitido: '04/05/2021', ativo: true },
  { id: '22', uuid: '22', clienteId: '2', listaProdutosId: [6,7,8,9,10], dataEmitido: '05/05/2021', ativo: false },
]

function getServer() {
  var server = new grpc.Server();
  // realiza bind/ligacao com o arquivo .proto
  server.addService(packagePB.carrinhoService.service, {
    "ListAllCar": ListAllCar,
    "GetCarrinhoById": GetCarrinhoById,
    "UpdateCarrinhoById": UpdateCarrinhoById,
    "CreateCarrinho": CreateCarrinho,
  });
  return server;
}

async function main(){
  //await db.connect().catch(console.dir);
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

function CreateCarrinho(call, callback){
  const idCar = call.request.car.id
  const car = dbCarrinhos.find((car) => car.uuid == idCar)
  callback(null, {car: car}) 
}

function ListAllCar(call, callback){
  callback(null, dbCarrinhos)
}

function GetCarrinhoById(call, callback){
  callback(null, null)
}

function UpdateCarrinhoById(call, callback){
  callback(null, null)
}