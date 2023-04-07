import axios from 'axios'
import CONST from '../utils/constant'

const config = {
  baseURL: CONST.BASE_URL_API
}

export const axiosInstance = axios.create(config)