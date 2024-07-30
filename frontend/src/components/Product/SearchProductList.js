import React from 'react';
import { Link } from 'react-router-dom';
import { VirtualScroller } from 'primereact/virtualscroller';
import { useSearch } from '../../context/SearchContext'; // Ajusta la ruta según la ubicación del archivo

export default function ProductList({ products }) {
  const { clearSearch } = useSearch();

  const handleProductClick = () => {
    clearSearch(); // Limpia el valor de búsqueda cuando se selecciona un producto
  };

  return (
    <div>
      <VirtualScroller 
        items={products} 
        itemSize={50} 
        itemTemplate={(item) => (
          <div key={item.id} className="product-item p-3 hover:bg-gray-100">
            <button onClick={handleProductClick}>
              <Link to={`/detalle-de-producto/${item.id}`}>
                {item.name}
              </Link>
            </button>
          </div>
        )}
        className="border-1 surface-border border-round" 
        style={{ width: '360px', height: '200px' }}
      />
    </div>
  );
}