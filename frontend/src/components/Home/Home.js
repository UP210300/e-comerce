import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel/Carousel';
import ProductList from '../Product/ProductList'; 
import CategoryList from '../Categories/CategoryList';
import { Divider } from 'primereact/divider';
import { ProgressSpinner } from 'primereact/progressspinner';

function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/products');
                const data = await response.json();
                setProducts(data);
                
                setTimeout(() => {
                    setLoading(false);
                }, 2500); 
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error);
                setLoading(false);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/categories');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchProducts();
        fetchCategories();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ProgressSpinner style={{ width: '100px', height: '100px' }} />
            </div>
        );
    }

    if (error) {
        return <p>Error loading products: {error.message}</p>;
    }

    return (
        <div>
            <Carousel />
            <Divider />
            <CategoryList categories={categories} />
            <Divider />
            <ProductList products={products} />
        </div>
    );
}

export default Home;
