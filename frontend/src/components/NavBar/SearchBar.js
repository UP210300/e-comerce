import React, { useEffect, useState, useCallback } from 'react';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { useSearch } from '../../context/SearchContext';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';

export default function SearchBar({ onProductsFiltered }) {
  const { searchValue, updateSearchValue } = useSearch();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [onProductsFiltered]);

  const handleSearch = useCallback(debounce((searchValue) => {
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    onProductsFiltered(filteredProducts);
  }, 2000), [products, onProductsFiltered]);

  useEffect(() => {
    handleSearch(searchValue);
  }, [searchValue, handleSearch]);

  const handleSearchChange = (e) => {
    updateSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    // Navegar a la ruta de búsqueda con el valor actual
    navigate(`/buscar/${encodeURIComponent(searchValue)}`);
    // Limpiar el campo de búsqueda
    updateSearchValue('');
  };

  return (
    <div className="flex flex-row space-x-2">
      <InputText 
        value={searchValue} 
        onChange={handleSearchChange} 
        className="w-4/5" 
        placeholder="Buscar..." 
      />
      {searchValue && (
        <Button 
          className="bg-transparent border-transparent font-semibold hover:bg-slate-600"
          onClick={handleSearchClick}>
          Buscar
        </Button>)}
    </div>
  );
}
