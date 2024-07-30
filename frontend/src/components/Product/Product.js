import React, { useRef, useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

export default function AdvancedDemo() {
    const { addToCart } = useCart();
    const toast = useRef(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8585/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.current.show({ severity: 'success', summary: 'Producto Añadido', detail: `El producto ${product.name} ha sido añadido al carrito`, life: 3000 });
    };

    const footer = (product) => (
        <div className="flex justify-end items-center">
            <div className="flex-grow">
                <h3 className="m-0">{product.name}</h3>
            </div>
            <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
                onClick={() => handleAddToCart(product)}
            />
        </div>
    );

    const cards = products.map((product) => (
        <Card key={product.id} footer={footer(product)} header={<img src='/assets/default-image.jpg' alt="" className="w-full h-full object-cover" />} className="md:w-1/4 m-2 flex-1">
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
        </Card>
    ));

    const firstRow = cards.slice(0, 4);
    const secondRow = cards.slice(4, 8);

    return (
        <div className="my-8">
            <Toast ref={toast} />
            <div className="flex justify-around items-center flex-nowrap">
                {firstRow}
            </div>
            <div className="flex justify-around items-center flex-nowrap mt-4">
                {secondRow}
            </div>
        </div>
    );
}
