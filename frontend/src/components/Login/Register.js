import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Attempting to register user with data:", {
      username,
      email,
      password,
      firstName,
      lastName,
      role: 'customer',
    });

    try {
      const userResponse = await axios.post('http://146.190.12.213:8080/api/auth/register', {
        username,
        email,
        password,
        firstName,
        lastName,
        role: 'customer',
      });

      const userId = userResponse.data.id; // Asegúrate de que este es el campo correcto del id del usuario creado

      console.log("User registration successful:", userResponse.data);

      // Crear el customer asociado
      const customerResponse = await axios.post('http://146.190.12.213:8080/api/customers/addCustomer', {
        user: userId,
        address: '320000 Calle Fuente de los Cibeles',
        country: 'Méxicoooo',
        city: 'Aguascalientessss',
        phone: '4493667185',
      });

      console.log("Customer creation successful:", customerResponse.data);

      setSuccess('Usuario y cliente registrados exitosamente');
      setError('');

      // Limpiar campos del formulario
      setUsername('');
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      navigate("/pagar");
    } catch (error) {
      console.error("Registration failed:", error);
      setError('El registro falló');
      setSuccess('');
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
      <div className="flex flex-col items-center justify-center min-h-screen space-y-10">
        <div className="border border-gray-200 shadow-md rounded-lg p-8 w-full max-w-md space-y-5">
          <img src='/assets/logo.png' alt="Logo" />
          <h2 className="text-center font-semibold text-2xl text-primary-500 mb-6">Registrarme</h2>
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
            <Button label="Registrarme" type="submit" className="bg-primary-500 p-2 w-full" />
          </form>
          <div className="flex flex-row space-x-1 mt-4">
            <p>Ya tengo una cuenta.</p>
            <button>
              <Link to="/iniciar-sesion" className="text-primary-500">Iniciar sesión</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;