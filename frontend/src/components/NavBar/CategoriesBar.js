import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

const menuItems = [
  {
    name: 'Ofertas',
    path: '/ofertas'
  },
  {
    name: 'Mis compras',
    path: '/compras'
  },
];

function NavBar() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/categories');
      const data = await response.json();
      setCategories(data.map(category => ({
        name: category.name,
        value: category.id 
      })));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <ul className="flex w-full flex-row items-center justify-around p-1 border border-b">
        <li>
          <Dropdown
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.value)}
            options={categories}
            optionLabel="name"
            placeholder="Categorias"
            className="md:w-14rem w-full"
          />
        </li>
        {menuItems.map((item) => (
          <li key={item.name} className="text-primary-500 font-semibold hover:text-primary-400">
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
