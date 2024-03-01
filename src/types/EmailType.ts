type EmailType = {
  id: string;
  body: string;
  sender: { name: string; u_email: string };
  recipient: { name: string; u_email: string };
  subject: string;
  timestamp: string;
};

export default EmailType;
