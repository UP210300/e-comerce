import React from 'react';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Category';
import Product from '../Product/Product';

function Home() {
  return (
    <div>
      <Carousel />
      <Categories />
      <Product />
    </div>
  );
}

export default Home;
