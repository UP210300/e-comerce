import React from 'react';
import Category from './Category';

export default function CategoryList({ categories = [] }) {
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {categories.length > 0 ? (
                categories.map(category => (
                    <Category key={category.idCategory} category={category} />
                ))
            ) : (
                <div>No hay categorias disponibles.</div>
            )}
        </div>
    );
}
