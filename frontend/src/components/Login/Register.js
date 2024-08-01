import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        username,
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        role
      });

      setSuccess('Usuario registrado exitosamente');
      setError('');
      // Limpiar campos del formulario
      setUsername('');
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setRole('');
      navigate("/pagar");
    } catch (error) {
      setError('El registro falló');
      setSuccess('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-10">
      <div className="bg-white border border-gray-300 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-center mb-6">Registrarme</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-x-2">
            <div className="flex flex-col">
              <label>Nombre</label>
              <InputText
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label>Apellidos</label>
              <InputText
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Usuario</label>
            <InputText
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Correo</label>
            <InputText
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Rol</label>
            <InputText
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
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
          {success && <p style={{ color: 'green' }}>{success}</p>}
          <Button label="Registrarme" type="submit" className="bg-slate-300 p-2 w-full" />
        </form>
        <div className="flex flex-row space-x-1 mt-4">
          <p>Ya tengo una cuenta.</p>
          <button>
            <Link to="/iniciar-sesion">Iniciar sesión</Link>
          </button>
        </div>
      </div>
      <div className="bg-white border border-gray-300 rounded-lg p-4 w-full max-w-md">
        <Link to="/">
          <Button
            label="Inicio"
            icon={<FontAwesomeIcon icon={faHome} className="mr-2" />}
            className="bg-slate-300 p-2 w-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Register;
