import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL} = getEnvVariables()

const createuserApi = axios.create({
    baseURL: VITE_API_URL

});

createuserApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers
    }

    return config;
})

export default createuserApi;