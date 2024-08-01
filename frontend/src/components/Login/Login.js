import React, { useState } from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Nuevo estado para mostrar/ocultar contraseña
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
      console.log('data:' + response.data.value);
      setError('');
      navigate(from, { replace: true });
    } catch (error) {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div>
      <div className="absolute left-10 top-10">
        <Link to="/">
          <button className="flex flex-row space-x-2 text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
            </svg>
            <p>Regresar al inicio</p>
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center h-screen space-y-10">
        <div className="border border-gray-200 shadow-md rounded-lg p-8 w-full max-w-md space-y-5">
          <img src='/assets/logo.png' alt="Logo" />
          <h2 className="text-center font-semibold text-2xl text-primary-500 mb-6">Iniciar sesión</h2>
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
            <div className="flex flex-col relative">
              <label>Contraseña</label>
              <InputText
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-6 right-0 flex items-center h-2/3 pr-3"
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="text-gray-500" />
              </button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button label="Iniciar sesión" type="submit" className="bg-primary-500 p-2 w-full" />
          </form>
          <div className="flex flex-row space-x-1 mt-4">
            <p>Aún no tengo una cuenta.</p>
            <button>
              <Link to="/registrarme" className="text-primary-500">Registrarme</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
