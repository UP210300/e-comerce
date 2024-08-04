import React, { useState } from 'react';
import { Card } from 'primereact/card';

const Category = ({ category }) => {
    const [isHovered, setIsHovered] = useState(false);

    const headerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
        backgroundColor: '#1f389b', 
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    };

    const cardStyle = {
        width: '100%',
        margin: '10px',
        backgroundColor: '#1f389b', 
        color: 'white', 
        borderRadius: '10px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', 
        boxShadow: isHovered ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)', 
    };

    const categoryImages = {
        'Oficina': '/assets/Oficina.jpg',
        'Escuela': '/assets/Escuela.jpg',
        'Arte': '/assets/Arte.png',
    };

    const imageUrl = categoryImages[category?.name] || '/assets/default-image.jpg';
    const categoryName = category?.name || 'Nombre desconocido';
    const categoryDescription = category?.description || 'Descripción no disponible';

    return (
        <div
            className={`my-8 ${isHovered ? 'transform scale-105' : ''} mx-10 md:mx-0`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transition: 'transform 0.3s ease-in-out' }} 
        >
            <Card
                header={
                    <div style={headerStyle}>
                        <img src={imageUrl} alt={categoryName} className="w-full h-full object-cover rounded-t-md" />
                    </div>
                }
                style={cardStyle}
                className="w-full h-full"
            >
                <div className="flex flex-col items-center text-white font-semibold p-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2">{categoryName}</h1>
                    <p className="text-lg">{categoryDescription}</p>
                </div>
            </Card>
        </div>
    );
};

export default Category;
