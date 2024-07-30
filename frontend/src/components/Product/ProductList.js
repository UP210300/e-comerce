import React from 'react';
import Product from './Product';

export default function ProductList({ products }) {
    return (
        <div className="grid grid-cols-4 gap-10">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
