import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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

 /* const handleCategoryChange = (e) => {
    setSelectedCategory(e.value);
    navigate(`/category/${e.value}`);
  };*/

  const handleCategoryChange = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div>
      <ul className="flex w-full flex-row items-center justify-around p-1 border border-b">
        <li>
          <Dropdown
            value={selectedCategory}
            onChange={handleCategoryChange}
            options={categories}
            optionLabel="name"
            placeholder="Categorias"
            className="md:w-60 w-full h-12" 
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
