import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
    
        if (token && userId) {
            axios.get(`http://localhost:8080/api/auth/getUser/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => setUser(response.data))
            .catch(error => {
                console.error('Error fetching user:', error.response ? error.response.data : error.message);
                setUser(null);
            });
        }
    }, []);
    
      

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    };

    return (
        <UserContext.Provider value={{ user, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);