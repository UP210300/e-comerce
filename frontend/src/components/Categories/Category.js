import React from 'react';
import { Card } from 'primereact/card';

const Category = ({ category }) => {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0'
    };

    const cardTitleStyle = {
        textAlign: 'center',
        margin: '0'
    };

    const cardStyle = {
        width: '100%', 
        margin: '10px'
    };

    const imageUrl = '/assets/default-image.jpg'; 
    const categoryName = category?.name || 'Nombre desconocido';
    const categoryDescription = category?.description || 'Descripción no disponible';

    return (
        <Card
            header={
                <div style={headerStyle}>
                    <img src={imageUrl} alt={categoryName} />
                </div>
            }
            style={cardStyle}
        >
            <div style={cardTitleStyle}>
                <h1 style={{ margin: '0' }}>{categoryName}</h1>
                <p>{categoryDescription}</p>
            </div>
        </Card>
    );
};

export default Category;
