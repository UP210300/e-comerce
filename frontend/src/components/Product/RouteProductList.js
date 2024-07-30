import React from 'react';
import { useSearch } from '../../context/SearchContext';
import ProductList from '../Product/ProductList';

const ProductListRoute = () => {
  const { filteredProducts } = useSearch();
  return <ProductList products={filteredProducts} />;
};

export default ProductListRoute;
