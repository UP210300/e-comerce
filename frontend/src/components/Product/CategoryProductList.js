import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Product from './Product'; 
import ReturnToHome from '../Home/ReturnToHome';

export default function ProductListCategory() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams(); 
  const navigate = useNavigate();

 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/products/by-category?categoryId=${categoryId}`);
      setProducts(response.data);

      console.log(response.data); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  fetchProducts();
}, [categoryId]);

  const handleProductClick = (productId) => {
    navigate(`/detalle-de-producto/${productId}`);
  };

  if (products.length === 0) {
    return (
      <div>
        <ReturnToHome message='No hay productos disponibles en esta categoría.'/> 
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-4 gap-10">
      {products.map(product => (
        <div key={product.id_product} onClick={() => handleProductClick(product.id)}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}
