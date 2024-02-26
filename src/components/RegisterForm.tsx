import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterType from "../types/RegisterType";
import signService from "../services/signService";
import "./RegisterForm.css";

interface RegisterFormData {
  name: string;
  u_email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    u_email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const { confirmPassword, ...data } = formData;

    if (data.password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    signService
      .register(data as RegisterType)
      .then((res) => {
        setSuccessMessage(res.data.message);
        setFormData({
          name: "",
          u_email: "",
          password: "",
          confirmPassword: "",
        });
        toast.success("Usuario registrado correctamente, ahora inicia sesión");
        navigate("/login");
      })
      .catch((err) => {
        err.response.status === 400
          ? toast.error("Este usuario ya existe, intenta con otro email")
          : toast.error("Error al registrar el usuario");
      });
  };

  return (
    <div className="center-container">
      <form onSubmit={handleSubmit} className="register-form">
        <div id="register-screen">
          <div>
            <h1 className="form-title text-lg font-bold">VelezReyes+ Mail</h1>
          </div>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="u_email">Email:</label>
            <input
              type="email"
              id="u_email"
              name="u_email"
              value={formData.u_email}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          <div>
            <button
              type="submit"
              className="w-full p-2 mt-2 rounded-md bg-blue-500 text-white"
            >
              Registrarse
            </button>
          </div>
          <div className="register-link-container">
            <p>Ya tienes una cuenta?</p>
            <Link to="/login" className="login-link border-b border-blue-500">
              Inicia Sesion
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
