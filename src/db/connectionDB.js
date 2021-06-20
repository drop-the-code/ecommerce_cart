// import mongoose from 'mongoose'
const mongoose = require('mongoose')
const connectionMongoose = async function connectionMongoose(){
    const USERNAME = process.env.DB_USERNAME //|| 'root'
    const PASSWORD = process.env.DB_PASSWORD //|| 'mongo'
    const HOST     = process.env.DB_HOST     //|| '127.0.0.1' //172.16.18.2:27017
    const PORT     = process.env.DB_PORT     //|| '27017'
    const BASE     = process.env.DB_BASE     //|| 'carrinho'
    const DB_CONNECTION_STRING = `mongodb://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${BASE}?authSource=admin`
    await mongoose.connect(
            DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false
        }
    )

    mongoose.connection.on('mongoose error', console.error.bind(console, 'connection error:'));
    mongoose.connection.once('open', function() {
        console.log('conectado no mongoose')
    });
}

module.exports = connectionMongoose