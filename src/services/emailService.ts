import axios from "axios";
import authHeader from "./authService";

const URL_API = "http://127.0.0.1:5000/api";

const getEmails = async () => {
  return axios.get(`${URL_API}/emails`, {
    headers: authHeader(),
  });
};

const sendEmail = async (email: any) => {
  return axios.post(`${URL_API}/emails`, email, {
    headers: authHeader(),
  });
};

const emailService = {
  getEmails,
  sendEmail,
};

export default emailService;
