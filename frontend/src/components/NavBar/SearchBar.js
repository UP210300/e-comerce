import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';

export default function SearchBar({ onProductsFiltered,searchValue }) {
  const [value, setValue] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        setProducts(response.data);
        onProductsFiltered(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [onProductsFiltered]);

  useEffect(() => {
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    onProductsFiltered(filteredProducts);
    searchValue(value);
  }, [value, products, onProductsFiltered]);

  return (
    <div>
      <InputText value={value} onChange={(e) => setValue(e.target.value)} className="w-full" placeholder="Buscar..." />
    </div>
  );
}
