const client = require('./clientGrpc')


//chamando o metodo List RPC e retornando os dados na console
//método list e o mesmo que foi definido no arquivo .proto e na criação do service no arquivo index.js
client.list({}, (error, carrinho) => {
    if (!error) {
        console.log(carrinho)
    } else {
        console.error(error)
    }
})