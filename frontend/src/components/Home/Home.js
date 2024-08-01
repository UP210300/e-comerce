import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel/Carousel';
import ProductList from '../Product/ProductList'; 
import CategoryList from '../Categories/CategoryList';
import { Divider } from 'primereact/divider';
        

function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:8080/api/categories')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products: {error.message}</p>;

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
