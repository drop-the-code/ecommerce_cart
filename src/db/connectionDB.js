import mongoose from 'mongoose';
const { connect, connection } = mongoose;
//mongoose.connect('mongodb://usuario:senha@host/base');
const connectionString = "mongodb://myDBReader:D1fficultP%40ssw0rd@mongodb0.example.com:27017/?authSource=admin"
connect('mongodb://127.0.0.1:27017/app', {useNewUrlParser: true, useUnifiedTopology: true});
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
    // we're connected!
});
// function schema
//const carrinhoSchema = requite('./carrinhoSchame').carrinhoSchema
import { carrinhoSchema } from './carrinhoSchema.js'
export const tableCar = mongoose.model('carrinho', carrinhoSchema)