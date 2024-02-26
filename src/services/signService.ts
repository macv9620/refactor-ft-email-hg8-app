import axios from "axios";
import RegisterType from "../types/RegisterType";

const API_URL = import.meta.env.VITE_BACKEND_URL;

type LoginType = {
  u_email: string;
  password: string;
};

const register = async (newUser: RegisterType) => {
  return await axios.post(`${API_URL}/register`, newUser);
};

const login = async (userLogin: LoginType) => {
  return await axios.post(`${API_URL}/login`, userLogin);
};

const signService = {
  register,
  login,
};

export default signService;
