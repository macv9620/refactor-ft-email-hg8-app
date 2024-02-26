type EmailType = {
  id: string;
  body: string;
  recipient_id: string;
  sender: { name: string; u_email: string };
  sender_id: string;
  subject: string;
  date?: string;
};

export default EmailType;
