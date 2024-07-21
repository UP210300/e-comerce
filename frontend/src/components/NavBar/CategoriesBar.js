import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

const menuItems = [
  {
    name: 'Ofertas',
  },
  {
    name: 'Mis compras',
  },
];

function NavBar() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    { name: 'Categoría 1', value: 1 },
    { name: 'Categoría 2', value: 2 },
    { name: 'Categoría 3', value: 3 },
  ];

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
          <li key={item.name}>
            <a href={item.name}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
