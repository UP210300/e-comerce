import React, { useEffect, useState } from 'react'; 
import { Card } from 'primereact/card';

export default function BasicDemo() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

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

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/categories');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
            setError(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    if (error) {
        return <div>Error fetching categories: {error.message}</div>;
    }

    return (
        <div>
            <hr style={{ border: '0', height: '2px', background: '#ccc', margin: '20px 0' }} />
            <div className="card-container" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                {categories.map(category => (
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
                ))}
            </div>
        </div>
    );
}
