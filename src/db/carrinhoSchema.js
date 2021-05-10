import mongoose from 'mongoose';
const { Schema } = mongoose

export let carrinhoSchema = new Schema({
  clienteId: String,
  ativo: Boolean,
  listaProdutosIds: [String]
}, {timestamp: true});