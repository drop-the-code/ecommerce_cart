import mongoose from 'mongoose'
//const { connect, connection } = mongoose;
import { carrinhoSchema } from './carrinhoSchema.js'

const USERNAME = 'root'
const PASSWORD = 'mongo'
const HOST = '127.0.0.1' //172.16.18.2:27017
const PORT = '27017'
const BASE = 'carrinho'
//mongoose.connect('mongodb://'+USERNAME+':'+PASSWORD+'@host/base');
//const connectionString = "mongodb://myDBReader:D1fficultP%40ssw0rd@mongodb0.example.com:27017/?authSource=admin"
const DB_CONNECTION_STRING = `mongodb://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${BASE}?authSource=admin`
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false
}
)
//mongoose.connect('mongodb://'+HOST+'/'+BASE, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('mongoose error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
    // we're connected!
    console.log('conectado no mongoose')
});
// function schema

export const modelCar = mongoose.model('carrinho', carrinhoSchema)