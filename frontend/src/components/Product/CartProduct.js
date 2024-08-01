import React from "react";
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import { InputNumber } from 'primereact/inputnumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext'; 
import { Link } from "react-router-dom";

const DEFAULT_IMAGE_URL = '/assets/default-image.jpg';

export default function CartProduct() {
  const { cart, removeFromCart, updateCartQuantity, toggleItemSelection, selectedItems } = useCart();

  const handleCheckboxChange = (item) => {
    toggleItemSelection(item.id);
  };

  const isItemSelected = (id) => selectedItems.includes(id);

  if (!cart || cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-2xl font-bold mb-2 text-center">Sin productos en el carrito.</p>
        <button className="px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600 text-center">
          <Link to="/">Regresar a la página principal</Link>
        </button>
      </div>
    );
  }

  return (
    <div>
      {cart.map((item) => {
        // Obtener la URL de la imagen del producto
        const imageUrl = item.images && item.images.length > 0 ? item.images[0].imageUrl : DEFAULT_IMAGE_URL;
        
        return (
          <Card key={item.id} className="relative mb-4">
            <div className="absolute top-2 right-2">
              <FontAwesomeIcon 
                icon={faTrash} 
                className="text-gray-500 hover:text-red-500 cursor-pointer" 
                onClick={() => removeFromCart(item.id)} 
              />
            </div>
            <div className="flex flex-row items-center">
              <Checkbox 
                checked={isItemSelected(item.id)} 
                onChange={() => handleCheckboxChange(item)} 
                className="mr-4" 
              />
              <img src={imageUrl} alt={item.name} className="md:w-1/6 m-6 flex-6" />
              <div className="ml-4">
                <p className="font-bold text-xl mb-1">{item.description}</p>
                <p>${item.price}</p>
              </div>
              <div className="col-span-2 flex items-end justify-end">
                <div>
                  <InputNumber 
                    value={item.quantity} 
                    showButtons 
                    onValueChange={(e) => updateCartQuantity(item.id, e.value)} 
                  />
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
