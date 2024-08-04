import React from 'react';
import Product from './Product';
import ReturnToHome from '../Home/ReturnToHome';

export default function ProductList({ products = [] }) {

    if (products.length === 0) {
        return (
          <ReturnToHome message='No hay productos disponibles.' />
        );
    }

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}