import React, { useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { useSearch } from '../../context/SearchContext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export default function SearchBar() {
  const { searchValue, updateSearchValue, updateProducts } = useSearch();

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        updateProducts(response.data); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [updateProducts]);

  const handleSearchChange = (e) => {
    updateSearchValue(e.target.value); 
  };

  return (
    <div className="flex flex-row space-x-2">
      <InputText 
        value={searchValue} 
        onChange={handleSearchChange} 
        className="w-4/5" placeholder="Buscar..." />
      {searchValue && (
        <Button 
          className="bg-transparent border-transparent font-semibold hover:bg-slate-600">
             <Link to="/buscar">
             Buscar
             </Link>
        </Button>
      )}
    </div>
  );
}
