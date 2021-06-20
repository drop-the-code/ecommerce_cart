// import { runServer } from './grpcServer.js'
const runServer =  require("./grpcServer.js")
//import dotenv  from "dotenv"
//import path from "path"
//dotenv.config({ path: path.resolve('.env') })
//import { connectionMongoose } from './db/connectionDB.js'
const connectionMongoose = require('./db/connectionDB.js')
//import { initializeEnvironmentVariables }  from './config/index.js'
const config = require("./config/index.js")
const initializeEnvironmentVariables = config.initializeEnvironmentVariables
function main(){
  initializeEnvironmentVariables('.env')
  connectionMongoose()
  const addressServer = runServer()
  console.log(addressServer)
}
main()