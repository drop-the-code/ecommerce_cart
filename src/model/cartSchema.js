// import mongoose from 'mongoose';
// const { Schema } = mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = Schema({
  clientId: String,
  status: Boolean,
  productListId: [String]
}, {timestamps: true});

module.exports =  modelCart = mongoose.model('cart', cartSchema)