import React, { useState } from 'react';
import axios from 'axios';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', null, {
        params: {
          usernameOrEmail,
          password
        }
      });

      // Assuming the response contains a token
      localStorage.setItem('token', response.data.token);
      setError('');
      // Redirect to the payment view
      navigate('/pagar');
    } catch (error) {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col">
          <label>Usuario o correo</label>
          <InputText
            type="text"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Contraseña</label>
          <InputText
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button label="Iniciar sesión" type="submit" className="bg-slate-300 p-2 w-full" />
      </form>
      <div className="flex flex-row space-x-1">
        <p>Aún no tengo una cuenta.</p> 
        <button>
          <Link to="/registrarme">
            Registrarme    
          </Link>
        </button>
      </div>  
    </div>
  );
};

export default Login;
