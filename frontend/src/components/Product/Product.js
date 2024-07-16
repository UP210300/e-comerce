import React from 'react'; 
import { Card } from 'primereact/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function AdvancedDemo() {
    const header = (
        <img src={require('../assets/default-image.jpg')} alt="" className="w-full h-full object-cover"></img>
    );
    const footer = (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div style={{ flexGrow: 1 }}>
                <h3 style={{ margin: 0 }}>Nombre del Producto</h3>
            </div>
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-500 hover:text-blue-500 cursor-pointer" />
        </div>
    );

    const cards = Array.from({ length: 8 }).map((_, index) => (
        <Card key={index} footer={footer} header={header} className="md:w-25rem" style={{ margin: '0.5em', flex: '1' }}>
            {/* Contenido opcional dentro de la tarjeta */}
        </Card>
    ));

    const firstRow = cards.slice(0, 4);
    const secondRow = cards.slice(4, 8);

    return (
        <div style={{ margin: '2em 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'nowrap' }}>
                {firstRow}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'nowrap', marginTop: '1em' }}>
                {secondRow}
            </div>
        </div>
    );
}
