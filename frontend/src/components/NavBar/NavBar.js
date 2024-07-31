
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import SearchBar from './SearchBar';
import CategoriesBar from './CategoriesBar';
import ProductList from '../Product/SearchProductList';

function NavBar() {
  const { searchValue, filteredProducts } = useSearch();

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-row justify-around bg-slate-500 p-4 text-white">
        <div>
          <button>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </Link>
          </button>
        </div>
        <div className="relative text-slate-800 w-1/2 lg:w-1/3">
          <SearchBar className="w-full" />
          {searchValue && (
            <div className="absolute z-20 bg-white">
              <ProductList className="absolute" products={filteredProducts} />
            </div>
          )}
        </div>
        <div className="flex flex-row space-x-10">
          <div>
            <button>
              <Link to="/perfil">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </Link>
            </button>
          </div>
          <div>
            <button>
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
