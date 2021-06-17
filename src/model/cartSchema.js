import mongoose from 'mongoose';
const { Schema } = mongoose

const cartSchema = Schema({
  clientId: String,
  status: Boolean,
  productListId: [String]
}, {timestamps: true});

export const modelCar = mongoose.model('cart', cartSchema)