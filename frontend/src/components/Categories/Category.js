
import React from 'react'; 
import { Card } from 'primereact/card';

export default function BasicDemo() {
    const header = (
        <img alt="Card" src="assets/default image" />
    );

    return (
        <div className="card">
            <Card title="Simple Card" header={header}>
                <h2>Encabezado del Card</h2>
            </Card>
        </div>
    );
}
