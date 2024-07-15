import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';

export default function BasicDemo() {
  const [currentPage, setCurrentPage] = useState(0);

  const products = [
    { id: 1, name: 'Imagen 1', src: require('../Assets/default-image.jpg') },
    { id: 2, name: 'Imagen 2', src: require('../Assets/default-image.jpg') },
    { id: 3, name: 'Imagen 3', src: require('../Assets/default-image.jpg') },
    { id: 4, name: 'Imagen 4', src: require('../Assets/default-image.jpg') },
    { id: 5, name: 'Imagen 5', src: require('../Assets/default-image.jpg') },
    { id: 6, name: 'Imagen 6', src: require('../Assets/default-image.jpg') },
  ];

  const responsiveOptions = [
    { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 },
  ];

  const totalPages = products.length;

  const onPageChange = (e) => {
    setCurrentPage(e.page);
  };

  const productTemplate = (product) => (
    <div className="border border-gray-200 rounded m-2 p-3 text-center relative">
      <div className="relative w-full h-96 overflow-hidden">
        <img src={product.src} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 w-full  text-white text-lg py-2">
          {product.name}
        </div>
      </div>
    </div>
  );

  const renderIndicators = () => {
    return (
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`mx-1 w-3 h-3 rounded-full border-2 border-black ${currentPage === index ? 'bg-gray-800' : 'bg-white'}`}
            style={{ cursor: 'pointer' }}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        onPageChange={onPageChange}
      />
      {renderIndicators()}
    </div>
  );
}
