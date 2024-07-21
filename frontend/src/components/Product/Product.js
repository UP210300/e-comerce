import React, { useState } from 'react'; 
import { Card } from 'primereact/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext'; 

export default function AdvancedDemo() {
    const { addToCart } = useCart();
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const header = (
        <img src={require('../assets/default-image.jpg')} alt="" className="w-full h-full object-cover"></img>
    );

    const footer = (product) => (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div style={{ flexGrow: 1 }}>
                <h3 style={{ margin: 0 }}>{product.name}</h3>
            </div>
            <FontAwesomeIcon 
                icon={faShoppingCart} 
                className="text-gray-500 hover:text-blue-500 cursor-pointer" 
                onClick={() => handleAddToCart(product)} 
            />
        </div>
    );

    const products = Array.from({ length: 8 }).map((_, index) => ({
        id: index,
        name: `Producto ${index + 1}`,
        price: 100,
        image: require('../assets/default-image.jpg')
    }));

    const handleAddToCart = (product) => {
        addToCart(product);
        setConfirmationMessage(`Producto ${product.name} añadido al carrito.`);
        setTimeout(() => {
            setConfirmationMessage('');
        }, 3000); 
    };

    const cards = products.map((product) => (
        <Card key={product.id} footer={footer(product)} header={<img src={product.image} alt="" className="w-full h-full object-cover" />} className="md:w-25rem" style={{ margin: '0.5em', flex: '1' }}>
        </Card>
    ));

    const firstRow = cards.slice(0, 4);
    const secondRow = cards.slice(4, 8);

    return (
        <div style={{ margin: '2em 0' }}>
            {confirmationMessage && (
                <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
                    {confirmationMessage}
                </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'nowrap' }}>
                {firstRow}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'nowrap', marginTop: '1em' }}>
                {secondRow}
            </div>
        </div>
    );
}
