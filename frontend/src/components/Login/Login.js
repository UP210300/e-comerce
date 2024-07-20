import React, { useState } from 'react';
import axios from 'axios';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Ruta de destino previa o por defecto '/perfil'
  const from = location.state?.from?.pathname || '/perfil';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', null, {
        params: {
          usernameOrEmail,
          password
        }
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);
      console.log('data:' + response.data.value)
      setError('');
      navigate(from, { replace: true });
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
