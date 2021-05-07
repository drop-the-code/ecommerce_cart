import { join } from 'path';
import { config } from 'dotenv';

const getEnvPath = (envFilename) => 
    join('environments', envFilename);


const initializeEnvironmentVariables = (envFilename) => {
    const envPath = getEnvPath(envFilename);
    return config({path: envPath});
}

export default { initializeEnvironmentVariables, getEnvPath };