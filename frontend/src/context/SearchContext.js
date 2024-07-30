import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchFilteredProducts, setSearchFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const clearSearch = () => setSearchValue('');

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
    const filtered = newProducts.filter(product =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchFilteredProducts(filtered)
    setFilteredProducts(filtered);
  };

  const updateSearchValue = (value) => {
    setSearchValue(value);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <SearchContext.Provider value={{ products, filteredProducts, searchValue, updateProducts, updateSearchValue,searchValue, setSearchValue, clearSearch, filteredProducts }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
