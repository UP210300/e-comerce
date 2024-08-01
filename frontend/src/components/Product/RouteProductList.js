import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../Product/ProductList';
import axios from 'axios';

const ProductListRoute = () => {
  const { query } = useParams(); 
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    if (query) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); 
    }
  }, [query, products]);

  return <ProductList products={filteredProducts} />;
};

export default ProductListRoute;
