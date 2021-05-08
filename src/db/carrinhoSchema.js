import mongoose from 'mongoose';
const { Schema } = mongoose;

export const carrinhoSchema = new Schema({
  id:  String,
  uuid:  String,
  clienteId: String,
  dataEmitido: { type: Date, default: Date.now },
  ativo: Boolean,
  //listaProdutosIds: [{ id: String, nome: String }]
  listaProdutosIds: [string]
});



