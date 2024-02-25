import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

interface LoginFormData {
  u_email: string;
  password: string;
}

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    u_email: '',
    password: ''
  });
  const [error, setError] = useState<string>('');
  const navigate = useNavigate(); // Utilizando useNavigate para la navegación

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }

      // Redirigir al usuario a la página principal
      navigate('/'); // Utilizando navigate para redirigir a la página principal
    } catch (error) {
      setError("Error al iniciar sesión");
    } console.log(JSON.stringify(formData))
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar sesión</h2>
        <div className="input-group">
          <label htmlFor="u_email">Correo electrónico:</label>
          <input type="email" id="u_email" name="u_email" value={formData.u_email} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Ingresar</button>
      </form>
      <p>¿Aún no estás registrado? <Link to="/register">Regístrate</Link></p>
    </div>
  );
};

export default LoginForm;
