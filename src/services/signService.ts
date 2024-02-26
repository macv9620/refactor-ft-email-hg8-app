import axios from "axios";
import RegisterType from "../types/RegisterType";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const register = async (newUser: RegisterType) => {
  return await axios.post(`${API_URL}/register`, newUser);
};

const login = () => {};

const signService = {
  register,
  login,
};

export default signService;
