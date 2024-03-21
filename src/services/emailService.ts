import axios from "axios";
import authHeader from "./authService";
import EmailFormType from "../types/EmailFormType";

const URL_API = import.meta.env.VITE_BACKEND_URL;

const getEmails = async () => {
  return axios.get(`${URL_API}/emails`, {
    headers: authHeader(),
  });
};

const sendEmail = async (email: EmailFormType) => {
  return axios.post(`${URL_API}/emails`, email, {
    headers: authHeader(),
  });
};

const deleteInboxEmail = async (emailId: string) => {
  return axios.patch(`${URL_API}/emails/${emailId}`, null, {
    headers: authHeader(),
  });
};

const emailService = {
  getEmails,
  sendEmail,
  deleteInboxEmail
};

export default emailService;
