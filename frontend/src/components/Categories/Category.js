import React, { useEffect, useState } from 'react'; 
import { Card } from 'primereact/card';

// Función para obtener la URL de la imagen basada en el nombre de la categoría
const getCategoryImage = (categoryName) => {
    const imageName = categoryName.replace(/\s+/g, '').toLowerCase(); // Elimina espacios y convierte a minúsculas
    const imageMap = {
        'arte': '/assets/Arte.png',
        'escuela': '/assets/Escuela.jpg',
        'oficina': '/assets/Oficina.jpg'
    };
    return imageMap[imageName] || '/assets/default-image.jpg'; // Usa una imagen por defecto si no hay coincidencia
};

// Importar la fuente directamente en el archivo JS
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');
`;

export default function BasicDemo() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    // Aplicar estilos en línea
    const headerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0' 
    };

    const cardTitleStyle = {
        textAlign: 'center',
        margin: '0',
        color: '#D4D93D', // Color del texto
        fontFamily: 'Merriweather, serif', // Fuente formal
        fontSize: '24px', // Tamaño de la fuente más grande
        fontWeight: '700' // Aplicar negrita
    };

    const cardStyle = {
        width: '30%', 
        margin: '10px',
        borderRadius: '15px', // Redondea las esquinas de la tarjeta
        overflow: 'hidden', // Asegura que el contenido no se desborde de las esquinas redondeadas
        backgroundColor: '#142AA6' // Color de fondo de la tarjeta
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
            <style>{styles}</style> {/* Añadir estilos globales */}
            <hr style={{ border: '0', height: '2px', background: '#ccc', margin: '20px 0' }} />
            <div className="card-container" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                {categories.map(category => (
                    <Card 
                        key={category.idCategory} 
                        header={
                            <div style={headerStyle}>
                                <img src={getCategoryImage(category.name)} alt={category.name} style={{ width: '100%', borderRadius: '15px 15px 0 0' }} />
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
