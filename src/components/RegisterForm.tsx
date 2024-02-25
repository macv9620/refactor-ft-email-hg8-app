import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from 'react-router-dom';
import './RegisterForm.css';

interface RegisterFormData {
  name: string;
  u_email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    u_email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
  
    const { confirmPassword, ...data } = formData; // Excluye confirmPassword de formData
    if (data.password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Envía 'data' en lugar de 'formData'
      });
  
      if (!response.ok) {
        throw new Error("Error al registrar el usuario");
      }
  
      // redirigir al usuario a la página de inicio de sesión              
      // history.push('/login');
    } catch (error) {
      setError("Error al registrar el usuario");
    } console.log(JSON.stringify(data))
  };

  return (
<form onSubmit={handleSubmit} className="register-form">
  <div id='register-screen'>
    <div>
      <h1 className="form-title">VelezReyes+ Mail</h1>
    </div>
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" />
    </div>
    <div>
      <label htmlFor="u_email">Email:</label>
      <input type="u_email" id="u_email" name="u_email" value={formData.u_email} onChange={handleChange} className="form-input" />
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-input" />
    </div>
    <div>
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-input" />
    </div>
    {error && <p className="error-message">{error}</p>}
    <div>
      <button type="submit" className="submit-button">Register</button>
    </div>
    <p>Already registered? <Link to="/login" className="login-link">Log in</Link></p>
  </div>
</form>

  );
};

export default RegisterForm;
