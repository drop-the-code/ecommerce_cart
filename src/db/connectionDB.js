const dbCarrinhos = [
    { id:'11', uuid: '11', clienteId: '1', listaProdutosIds: [1,2,3,4,5],dataEmitido: '04/05/2021', ativo: true },
    { id:'22', uuid: '22', clienteId: '2', listaProdutosIds: [6,7,8,9,10], dataEmitido: '05/05/2021', ativo: false },
  ]

export {dbCarrinhos}

//import uuid from 'uuid'
  
//import { MongoClient } from "mongodb"
//import {} from 'dotenv/config'

// Mongo Connection
//var url = process.env.DB_URI
//const dbClient = new MongoClient(url, { useUnifiedTopology: true });

/*
async function connect() {
    try {
        await dbClient.connect();
        let db = await dbClient.db(process.env.DB_NAME);
        db.command({ ping: 1 });
        console.log("Connected successfully to mongo server");
        // Create index
        await db.collection("users").createIndex({ email: 1 });
        return db
    } catch (e) {
        console.error(e);
        db.close()
    }
}
*/

/*
import { ObjectId } from "mongodb";
function findOne(id) {
    return global.conn.collection("customers").findOne(new ObjectId(id));
}
 
export default { findAll, insert, findOne }


// como gerar automaticamente uuid e id 
//melhor usar mongoose para acessar os objetos?
const mongoose = () => {
    // function main_db
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
    // function connection
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
    });
    // function schema
    const carrinhoSchema = requite('./carrinhoSchame').carrinhoSchema
    const Carrinho = mongoose.model('carrinho', carrinhoSchema);
    const carrinho11 = new Carrinho({uuid: '11', clienteId: '1', listaProdutosIds: [1,2,3,4,5],dataEmitido: '04/05/2021', ativo: true });
    console.log(silence.name); // 'Silence'

    // testando como faz funcao
    carrinhoSchema.methods.speak = function () {
        const acao = this.uuid
          ? "teste uuid " + this.uuid
          : "ainda esta sem ID";
        console.log(acao);
    }  
    const car = mongoose.model('carrinho', carrinhoSchema);
    const a = new Carrinho({id:'22', uuid: '22', clienteId: '2', listaProdutosIds: [6,7,8,9,10], dataEmitido: '05/05/2021', ativo: false })
    a.acao()

    car.save(function (err, car) {
        if (err) return console.error(err);
        car.speak();
      });

}

*/