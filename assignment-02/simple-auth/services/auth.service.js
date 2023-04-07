import { axiosInstance } from "../config/axiosInstance";

const login = async (credentials) => {
  try {
    console.log(credentials)
    const res = await axiosInstance.post('/user/login', credentials)
    console.log('object')
    console.log(res)
    return res.data
  } catch (error) {
    console.log(error)
    return error
  }
}

const authService = { login }

export default authService