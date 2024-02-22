import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Importa Link para la navegación

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }else if (password == confirmPassword){
      alert('iguales')
    }

    // Aquí iría la lógica para enviar el formulario de registro
    // Por ejemplo, puedes enviar una solicitud HTTP POST al backend

    // Después de enviar la solicitud, puedes redirigir al usuario a la página de inicio de sesión
    // Por ejemplo, si estás usando React Router, puedes hacer algo como:
    // history.push('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirmar contraseña:</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      {error && <p>{error}</p>}
      <div>
        <button type="submit">Registrarse</button>
      </div>
      <p>¿Ya estás registrado? <Link to="/login">Ingresa</Link></p>
    </form>
  );
};

export default Register;
