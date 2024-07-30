import React, { useRef } from 'react';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../formatter/CurrencyFormatter';

export default function Product({ product }) {
    const { addToCart } = useCart();
    const toast = useRef(null);

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
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
                onClick={(event) => handleAddToCart(event, product)}
            />
        </div>
    );

<<<<<<< HEAD
=======
    const cards = products.map((product) => (

        <Link to={`/detalle-de-producto/${product.id}`} className="md:w-1/3 m-6 flex-6 no-underline" style={{ textDecoration: 'none' }} key={product.id}>
            <Card footer={footer(product)} header={<img src='/assets/default-image.jpg' alt="" className="w-full h-full object-cover"/>} className="w-full h-full object-cover">
                <p>{product.description}</p>
                <p>Precio: ${product.price}</p>
            </Card>
        </Link>
    ));

    const firstRow = cards.slice(0, 3);
    const secondRow = cards.slice(3, 6);

>>>>>>> 10d065952f32b94c910c798763e9e22852bf3a9f
    return (
        <div className="my-8">
            <Toast ref={toast} />
            <Link to={`/detalle-de-producto/${product.id}`} className="md:w-1/3 m-6 flex-6 no-underline" style={{ textDecoration: 'none' }} key={product.id}>
                <Card footer={footer(product)} header={<img src={require('../assets/default-image.jpg')} alt="" className="w-full h-full object-cover"/>} className="w-full h-full object-cover">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                        <p>{product.description}</p>
                            <p>{formatCurrency(product.price)}</p> 
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
    );
}
