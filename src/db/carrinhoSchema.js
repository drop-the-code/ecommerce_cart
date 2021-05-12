import mongoose from 'mongoose';
const { Schema } = mongoose

const carrinhoSchema = Schema({
  clienteId: String,
  ativo: Boolean,
  listaProdutosIds: [String]
}, {timestamps: true});



export const modelCar = mongoose.model('carrinho', carrinhoSchema)