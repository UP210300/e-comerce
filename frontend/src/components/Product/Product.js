import React, { useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../formatter/CurrencyFormatter';

const DEFAULT_IMAGE_URL = '/assets/default-image.jpg';

export default function Product({ product }) {
    const { addToCart } = useCart();
    const toast = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleAddToCart = (event, product) => {
        event.stopPropagation();
        event.preventDefault();
        addToCart(product);
        toast.current.show({ severity: 'success', summary: 'Producto Añadido', detail: `El producto ${product.name} ha sido añadido al carrito`, life: 3000 });
    };

    const footer = (product) => (
        <div className="flex justify-end items-center">
            <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-3xl text-gray-500 hover:text-blue-500 cursor-pointer"
                onClick={(event) => handleAddToCart(event, product)}
            />
        </div>
    );

    const imageUrl = product.images && product.images.length > 0 ? product.images[0].imageUrl : DEFAULT_IMAGE_URL;

    return (
        <div className="my-8">
            <Toast ref={toast} />
            <div
                className={`transition duration-300 ${isHovered ? 'shadow-lg transform scale-105' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to={`/detalle-de-producto/${product.id}`} style={{ textDecoration: 'none' }} key={product.id}>
                    <Card footer={footer(product)} header={<img src='/assets/default-image.jpg' alt="" className="w-full h-full object-cover" />} className="w-full h-full object-cover">
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <p>{product.description}</p>
                                <p>{formatCurrency(product.price)}</p> 
                            </div>
                        </div>
                    </Card>
                </Link>
            </div>
        </div>
    );
}
