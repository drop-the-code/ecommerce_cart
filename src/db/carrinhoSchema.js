import mongoose from 'mongoose';
const { Schema } = mongoose;


export const carrinhoSchema = new Schema({
  //listaProdutosIds: [{ id: String, nome: String }]
  id:  String,
  uuid:  String,
  clienteId: String,
  dataEmitido: { type: Date, default: Date.now },
  ativo: Boolean,
  listaProdutosIds: [String]
});

/*
export class carrinhoSchema extends mongoose.Schema {
  id:  String
  uuid:  String
  clienteId: String
  dataEmitido: { type: Date, default: Date.now }
  ativo: Boolean
  //listaProdutosIds: [{ id: String, nome: String }]
  listaProdutosIds: [string
}
*/