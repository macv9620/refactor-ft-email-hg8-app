import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Importa Link para la navegación

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Aquí iría la lógica para enviar el formulario
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div id = 'login-screen'>
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div>
            <button type="submit">Ingresar</button>
          </div>

            <p>¿Aún no estás registrado? <Link to="/register">Regístrate</Link></p>
            </div>
      </form>
    
    );
};

export default Login;
