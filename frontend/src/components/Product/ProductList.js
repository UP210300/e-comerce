import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Product from '../Product';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:8080/api/products';
        if (categoryId) {
          url += `?category=${categoryId}`;
        }
        const response = await axios.get(url);
        setProducts(response.data);
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
        <p>No hay productos disponibles en esta categoría.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-4 gap-10">
      {products.map(product => (
        <div key={product.id} onClick={() => handleProductClick(product.id)}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}
