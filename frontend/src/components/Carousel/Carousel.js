import React from 'react';
import { Carousel } from 'primereact/carousel';

const IMAGES = [
  'assets/carousel/discount_1.jpg',
  'assets/carousel/discount_2.jpg',
  'assets/carousel/material.jpg',
  'assets/carousel/shiping_1.jpg',
  'assets/carousel/shiping_2.jpg',
  'assets/carousel/shiping_3.jpg'
];

export default function BasicDemo() {
  const responsiveOptions = [
    { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 },
  ];

  const imageTemplate = (image, index) => {
    return (
      <div key={index} className="border border-gray-200 rounded m-2 p-3 text-center relative">
        <div className="relative w-full h-96 overflow-hidden">
          <img src={image} alt={`Carousel ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      </div>
    );
  };

  return (
    <div className="card mx-10">
      <Carousel
        value={IMAGES}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={imageTemplate}
      />
    </div>
  );
}
