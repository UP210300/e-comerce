import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import ReturnToHome from '../Home/ReturnToHome';

export default function ProductList({ selectedCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:8080/api/products';
        if (selectedCategory) {
          url += `?category=${selectedCategory.value}`;
        }
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  if (products.length === 0) {
    return (
      <ReturnToHome message='No hay productos disponibles.' />
    );
  }

  return (
    <div className="grid md:grid-cols-4 gap-10">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
