import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../formatter/CurrencyFormatter';

const DEFAULT_IMAGE_URL = '/assets/default-image.jpg';

export default function Offers() {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hoveredOfferId, setHoveredOfferId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/products/least-selling')
            .then(response => response.json())
            .then(data => {
                setOffers(data); 
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    const { addToCart } = useCart();
    const toast = useRef(null);

    const handleAddToCart = (event, offer) => {
        event.stopPropagation();
        event.preventDefault();
        addToCart(offer);
        toast.current.show({ severity: 'success', summary: 'Producto Añadido', detail: `El producto ${offer.name} ha sido añadido al carrito`, life: 3000 });
    };

    const footer = (offer) => (
        <div className="flex justify-end items-center">
            <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-3xl text-gray-500 hover:text-blue-500 cursor-pointer"
                onClick={(event) => handleAddToCart(event, offer)}
            />
        </div>
    );

    const getImageUrl = (offer) => {
        return offer.images && offer.images.length > 0 ? offer.images[0].imageUrl : DEFAULT_IMAGE_URL;
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading offers: {error.message}</p>;

    return (
        <div className="space-y-5">
            <Toast ref={toast} />
            <Link to="/">
                <button className="flex flex-row items-center space-x-2 text-primary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
                    </svg>
                    <p>Regresar al inicio</p>
                </button>
            </Link>
            <div className="grid grid-cols-4 gap-10">
                {offers.map(offer => (
                    <div
                        key={offer.id}
                        className={`transition duration-300 ${hoveredOfferId === offer.id ? 'shadow-lg transform scale-105' : ''}`}
                        onMouseEnter={() => setHoveredOfferId(offer.id)}
                        onMouseLeave={() => setHoveredOfferId(null)}
                    >
                        <Link to={`/detalle-de-producto/${offer.id}`} style={{ textDecoration: 'none' }}>
                            <Card footer={footer(offer)} header={<img src={getImageUrl(offer)} alt={offer.name} className="w-full h-full object-cover" />} className="w-full h-full object-cover">
                                <div className="flex flex-col">
                                    <div className="flex flex-row justify-between">
                                        <p>{offer.description}</p>
                                        <p>{formatCurrency(offer.price)}</p>  
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
