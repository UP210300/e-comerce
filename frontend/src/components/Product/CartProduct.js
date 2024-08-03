import React from "react";
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import { InputNumber } from 'primereact/inputnumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext'; 
import { Link } from "react-router-dom";
import { formatCurrency } from '../../formatter/CurrencyFormatter';

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
        const imageUrl = item.images && item.images.length > 0 ? item.images[0].imageUrl : DEFAULT_IMAGE_URL;
        
        return (
          <Card key={item.id}>
            <div>
              <div className="flex justify-end">
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-gray-500 hover:text-red-500 cursor-pointer w-8"
                  onClick={() => removeFromCart(item.id)}
                />
              </div>
              <div className="flex flex-col lg:flex-row space-y-5">
                <div className="flex justify-start lg:items-center lg:justify-center">
                  <Checkbox
                    checked={isItemSelected(item.id)}
                    onChange={() => handleCheckboxChange(item)}
                  />
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="flex justify-center">
                    <img src={imageUrl} alt={item.name} className="lg:w-2/3" />
                  </div>
                  <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start w-full py-2">
                    <p className="font-bold text-xl">{item.description}</p>
                    <p className="text-lg">{formatCurrency(item.price)}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div>
                  <InputNumber
                    value={item.quantity}
                    onValueChange={(e) => updateCartQuantity(item.id, e.value)}
                    className="!w-1/3"
                    showButtons
                    decrementButtonClassName="bg-primary-500 text-white"
                    incrementButtonClassName="bg-primary-500 text-white"
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
