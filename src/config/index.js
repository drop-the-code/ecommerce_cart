//import { resolve } from 'path'
const path = require('path')
const resolve = path.resolve
const dotenv = require('dotenv')
//import { config } from 'dotenv'

const getEnvPath = (envFilename) => 
    resolve('./', envFilename)

const initializeEnvironmentVariables = (envFilename) => {
    const envPath = getEnvPath(envFilename)
    return dotenv.config({path: envPath})
}

module.exports = { initializeEnvironmentVariables, getEnvPath }