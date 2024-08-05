import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel/Carousel';
import ProductList from '../Product/ProductList';
import CategoryList from '../Categories/CategoryList';
import { Divider } from 'primereact/divider';
import { ProgressSpinner } from 'primereact/progressspinner';
import axios from 'axios';

function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [loadingUser, setLoadingUser] = useState(true);
    const [errorProducts, setErrorProducts] = useState(null);
    const [errorCategories, setErrorCategories] = useState(null);
    const [errorUser, setErrorUser] = useState(null);
    const [user, setUser] = useState({ firstName: '', lastName: '' });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://146.190.12.213/api/products/top-selling');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setErrorProducts(error);
            } finally {
                setLoadingProducts(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://146.190.12.213:8080/api/categories');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setErrorCategories(error);
            } finally {
                setLoadingCategories(false);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const userId = localStorage.getItem('userId');
                const response = await axios.get(`http://146.190.12.213:8080/api/auth/getUser/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser({
                    firstName: response.data.firstName || '',
                    lastName: response.data.lastName || '',
                });
            } catch (error) {
                console.error('Error fetching user data', error);
                setErrorUser(error);
            } finally {
                setLoadingUser(false);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="space-y-5">
            {loadingUser ? (
                <div className="flex justify-center items-center h-screen">
                    <ProgressSpinner style={{ width: '100px', height: '100px' }} />
                </div>
            ) : errorUser ? (
                <h1 className="font-semibold text-primary-500 text-5xl space-x-2">
                    Bienvenido de nuevo!
                </h1>
            ) : (
                <h1 className="font-semibold text-primary-500 text-5xl space-x-2">
                    Bienvenido de nuevo {user.firstName}!
                </h1>
            )}

            <Carousel />
            <Divider />

            {loadingCategories ? (
                <div className="flex justify-center items-center h-screen">
                    <ProgressSpinner style={{ width: '100px', height: '100px' }} />
                </div>
            ) : errorCategories ? (
                <p>Error loading categories: {errorCategories.message}</p>
            ) : (
                <CategoryList categories={categories} />
            )}

            <Divider />
            <div>
                <h1 className="font-semibold text-primary-500 text-5xl text-center space-x-2">
                    Nuestros productos más vendidos
                </h1>
            </div>

            {loadingProducts ? (
                <div className="flex justify-center items-center h-screen">
                    <ProgressSpinner style={{ width: '100px', height: '100px' }} />
                </div>
            ) : errorProducts ? (
                <p>Error loading products: {errorProducts.message}</p>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    );
}

export default Home;
