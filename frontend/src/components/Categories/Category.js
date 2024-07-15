import React from 'react'; 
import { Card } from 'primereact/card';

export default function BasicDemo() {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0' 
    };

    const header = (
        <div style={headerStyle}>
            <img src={require('../assets/default-image.jpg')} alt="" />
        </div>
    );

    const cardTitleStyle = {
        textAlign: 'center',
        margin: '0'

    };

    const cardStyle = {
        width: '30%', // Ajusta este valor para cambiar el ancho
        margin: '10px' // Añade un margen para espaciar las tarjetas
    };

    return (
        <div>
            <hr style={{ border: '0', height: '2px', background: '#ccc', margin: '20px 0' }} />
            <div className="card-container" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <Card header={header} style={cardStyle}>
                    <div style={cardTitleStyle}>
                        <h1 style={{ margin: '0' }}>Category 1</h1> 
                    </div>
                </Card>
                <Card header={header} style={cardStyle}>
                    <div style={cardTitleStyle}>
                        <h1 style={{ margin: '0' }}>Category 2</h1> 
                    </div>
                </Card>
                <Card header={header} style={cardStyle}>
                    <div style={cardTitleStyle}>
                        <h1 style={{ margin: '0' }}>Category 3</h1> 
                    </div>
                </Card>
            </div>
        </div>
    );
}
