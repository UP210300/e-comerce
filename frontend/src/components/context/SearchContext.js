import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState('');

  const clearSearch = () => setSearchValue('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue, clearSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
