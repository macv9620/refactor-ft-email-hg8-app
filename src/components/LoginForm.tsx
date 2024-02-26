import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useStateProvider } from "../context/StateContext";

interface LoginFormData {
  u_email: string;
  password: string;
}

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    u_email: "",
    password: "",
  });

  const [{}, dispatch] = useStateProvider();

  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }
      const data = await response.json();
      localStorage.setItem("access_token", JSON.stringify(data.access_token));
      localStorage.setItem("email", JSON.stringify(data.u_email));

      dispatch({
        type: "SET_USER_INFO",
        userInfo: data.u_email,
      });

      navigate("/");
    } catch (error) {
      setError("Error al iniciar sesión");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="text-lg flex flex-col justify-center items-center mb-2">
          <h2 className="font-bold">VelezReyes+ Mail</h2>
          <h2>Iniciar Sesion</h2>
        </div>
        <div className="input-group">
          <label htmlFor="u_email">Correo electrónico:</label>
          <input
            type="email"
            id="u_email"
            name="u_email"
            value={formData.u_email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button
          type="submit"
          className="w-full p-2 mt-2 rounded-md bg-blue-500 text-white"
        >
          Ingresar
        </button>
      </form>
      <p>
        ¿Aún no estás registrado?{" "}
        <Link to="/register" className="border-b border-blue-500">
          Regístrate
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
