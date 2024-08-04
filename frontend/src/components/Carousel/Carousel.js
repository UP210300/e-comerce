import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Dialog } from 'primereact/dialog';

const IMAGES = [
  'assets/carousel/discount_1.jpg',
  'assets/carousel/discount_2.jpg',
  'assets/carousel/material.jpg',
  'assets/carousel/shiping_1.jpg',
  'assets/carousel/shiping_2.jpg',
  'assets/carousel/shiping_3.jpg'
];

export default function BasicDemo() {
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const responsiveOptions = [
    { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 },
  ];

  const imageTemplate = (image, index) => {
    return (
      <div
        key={index}
        className="rounded m-2text-center relative cursor-pointer"
        onClick={() => handleImageClick(image)}>
        <div className="surface-border border-round m-2 text-center">
                <div className="mb-3">
                    <img src={image} alt={`Carousel ${index + 1}`} className="w-full h-full"></img>
                </div>
            </div>
      </div>
    );
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setVisible(true);
  };

  return (
    <div className="card mx-10">
      <Carousel
        value={IMAGES}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={imageTemplate}
      />
      <Dialog
        modal
        visible={visible}
        style={{ width: '40vw' }}
        onHide={() => setVisible(false)}
        className="custom-dialog"
      >
        {selectedImage && (
          <div className="flex justify-center">
            <img src={selectedImage} alt="Selected" className="w-full h-auto" />
          </div>
        )}
      </Dialog>
    </div>
  );
}
