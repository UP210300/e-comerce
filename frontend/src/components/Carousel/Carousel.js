import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import axios from 'axios';


const DEFAULT_IMAGE_URL = '/assets/default-image.jpg';

export default function BasicDemo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error al buscar productos:', error);
      });
  }, []);

  const responsiveOptions = [
    { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 },
  ];

  const productTemplate = (product) => {

    const imageUrl = product.images && product.images.length > 0 ? product.images[0] : DEFAULT_IMAGE_URL;

    return (
      <div className="border border-gray-200 rounded m-2 p-3 text-center relative">
        <div className="relative w-full h-96 overflow-hidden">
          <img src={imageUrl} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full text-white text-lg py-2">
            {product.name}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}x
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}