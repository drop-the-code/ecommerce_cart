import { getServer } from './grpcServer.js'
import dotenv  from "dotenv"
//import path from "path"
//dotenv.config({ path: path.resolve('.env') })
import { connectionMongoose } from './db/connectionDB.js'

import { initializeEnvironmentVariables }  from './config/index.js'

function main(){
  initializeEnvironmentVariables('.env')
  connectionMongoose()
  const addressServer = getServer()
  console.log(addressServer)
}
main()