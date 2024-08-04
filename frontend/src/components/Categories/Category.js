import React from 'react';
import { Card } from 'primereact/card';

export default function Category({ category }) {
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
        width: '30%',
        margin: '10px'
    };

    return (
        <Card
            key={category.idCategory}
            header={
                <div style={headerStyle}>
                    <img src='/assets/default-image.jpg' alt={category.name} />
                </div>
            }
            style={cardStyle}
        >
            <div style={cardTitleStyle}>
                <h1 style={{ margin: '0' }}>{category.name}</h1>
            </div>
        </Card>
    );
}
