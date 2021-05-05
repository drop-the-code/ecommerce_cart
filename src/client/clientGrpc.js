const grpc = require('grpc')
const PROTO_PATH = '../protocolBuffers/carrinho.proto'
const carrinhoService = grpc.load(PROTO_PATH).carrinhoService

const client = new carrinhoService('localhost:50051',
    grpc.credentials.createInsecure())
    
module.exports = client