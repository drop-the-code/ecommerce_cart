import { resolve } from 'path'
import { config } from 'dotenv'

const getEnvPath = (envFilename) => 
    resolve('./', envFilename)

const initializeEnvironmentVariables = (envFilename) => {
    const envPath = getEnvPath(envFilename)
    return config({path: envPath})
}

export { initializeEnvironmentVariables, getEnvPath }