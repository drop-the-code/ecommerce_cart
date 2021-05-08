import mongoose from 'mongoose';
const { Schema } = mongoose
//import { uuid } from 'node-uuid'
import { v4 as uuidv4 } from 'uuid'
const UUID = mongoose.Types.UUID;

//export const carrinhoSchema = new Schema({
export let carrinhoSchema = new Schema({
  //listaProdutosIds: [{ id: String, nome: String }]
  //_id: mongoose.Schema.Types.ObjectId,
  //uuid: { type: String, default: function genUUID() {uuid.v1()} },
  //uuid: { type: String, default: function genUUID() {return uuid.v1()}},
  //uuid: { type: UUID, default: uuidv4() },
  uuid: { type: String, default: uuidv4() },
  clienteId: String,
  dataEmitido: { type: Date, default: Date.now },
  ativo: Boolean,
  listaProdutosIds: [String]
});