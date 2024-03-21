import axios from "axios";
import authHeader from "./authService";
import EmailFormType from "../types/EmailFormType";

const URL_API = import.meta.env.VITE_BACKEND_URL;

const getInboxEmails = async () => {
  return axios.get(`${URL_API}/emails`, {
    headers: authHeader(),
  });
};

const getSentEmails = async () => {
  return axios.get(`${URL_API}/emails/sent`, {
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

const deleteSentEmail = async (emailId: string) => {
  return axios.patch(`${URL_API}/emails/sent/${emailId}`, null, {
    headers: authHeader(),
  });
};

const emailService = {
  getInboxEmails,
  sendEmail,
  deleteInboxEmail,
  getSentEmails,
  deleteSentEmail
};

export default emailService;
