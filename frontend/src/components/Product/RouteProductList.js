import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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

  return(
    <div className="space-y-3">
      <div>
        <Link to="/">
          <button className="flex flex-row items-center space-x-2 text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
            </svg>
            <p>Regresar al inicio</p>
          </button>
        </Link>
      </div>
      <h1 className="font-semibold text-xl">Resultados de la busqueda {query} ...</h1>
      <ProductList products={filteredProducts} />;
    </div>
  )
};

export default ProductListRoute;
