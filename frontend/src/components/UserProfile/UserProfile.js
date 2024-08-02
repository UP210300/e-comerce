import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const userId = localStorage.getItem('userId');

                const response = await axios.get(`http://localhost:8080/api/auth/getUser/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser({
                    username: response.data.username,
                    email: response.data.email,
                    firstName: response.data.firstName || '',
                    lastName: response.data.lastName || '',
                });
            } catch (error) {
                console.error('Error fetching user data', error);
                setError('Error fetching user data');
            }
        };

        fetchUserData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          localStorage.removeItem('userId');
          localStorage.removeItem('token');
          navigate('/');
        } catch (error) {
          console.log('Error');
          setError('Error logging out');
        }
      };

    return (
        <div className="">
            <h2 className="font-semibold text-xl">Perfil</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col">
                    <label>Nombre</label>
                    <InputText
                        name="name"
                        placeholder={`${user.firstName} ${user.lastName}`}
                        value={`${user.firstName} ${user.lastName}`}
                        onChange={(e) => {
                            const [firstName, ...lastNameArray] = e.target.value.split(' ');
                            setUser({
                                ...user,
                                firstName: firstName,
                                lastName: lastNameArray.join(' ')
                            });
                        }}
                    />
                </div>
                <div className="grid grid-cols-3 gap-x-5">
                    <div className="flex flex-col col-span-2">
                        <label>Correo</label>
                        <InputText
                            disabled
                            name="email"
                            value={user.email}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Usuario</label>
                        <InputText
                            disabled
                            name="username"
                            value={user.username}
                        />
                    </div>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="flex justify-end">
                    <Button label="Cerrar sesión" type="submit" className="bg-primary-500 p-2 w-1/3" />
                </div>
            </form>
        </div>
    );
};

export default UserProfile;
