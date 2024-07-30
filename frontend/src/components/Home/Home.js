import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Category';
import ProductList from '../Product/ProductList'; 

function Home() {
    const [products, setProducts] = useState([]);
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products: {error.message}</p>;

    return (
        <div>
            <Carousel />
            <Categories />
            <ProductList products={products} />
        </div>
    );
}

export default Home;
