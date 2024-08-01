
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import SearchBar from './SearchBar';
import CategoriesBar from './CategoriesBar';
import ProductList from '../Product/SearchProductList';

function NavBar() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { searchValue } = useSearch();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between bg-primary-500 p-4 text-white px-10">
        <div className="w-[120px] ml-[60px]">
          <button className="flex-shrink-0">
            <Link to="/">
              <img src='/assets/logo-white.png' alt="Logo" />
            </Link>
          </button>
        </div>
        <div className="relative text-slate-800 w-1/2 lg:w-1/3 ml-[160px]">
          <SearchBar className="w-full" onProductsFiltered={setFilteredProducts} />
          {searchValue && (
            <div className="absolute z-20 bg-white">
              <ProductList className="absolute" products={filteredProducts} />
            </div>
          )}
        </div>
        <div className="flex flex-row space-x-5 items-center justify-end mr-[40px]">
          <div>
            <button className="hover:bg-primary-400 rounded-full p-2">
              <Link to="/perfil">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </Link>
            </button>
          </div>
          <div>
            <button className="hover:bg-primary-400 rounded-full p-2">
              <Link to="/carrito">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <CategoriesBar />
      </div>
    </div>
    
  );
}

export default NavBar;
