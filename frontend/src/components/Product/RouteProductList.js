import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../Product/ProductList';
import axios from 'axios';

const ProductListRoute = () => {
  const { query } = useParams(); // Obtén el parámetro de búsqueda de la URL
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Carga todos los productos cuando el componente se monta
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Inicialmente, muestra todos los productos
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    // Filtra los productos basados en el parámetro de búsqueda
    if (query) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Si no hay consulta, muestra todos los productos
    }
  }, [query, products]);

  return <ProductList products={filteredProducts} />;
};

export default ProductListRoute;
