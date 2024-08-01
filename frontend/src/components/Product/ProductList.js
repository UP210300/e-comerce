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
        <div className="grid md:grid-cols-4 gap-10">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
