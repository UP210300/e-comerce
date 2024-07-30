import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams(); // Obtener el id del producto de la URL
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); // Para manejar la navegación

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleBuy = () => {
    addToCart({ ...product, quantity });
    navigate('/carrito'); // Redirige al carrito
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 space-y-10 md:space-y-0 md:space-x-10">
        <div className="grid grid-cols-3 gap-y-8 md:gap-y-4">
          <div className="col-span-3 flex flex-row lg:grid lg:col-span-1 justify-items-center items-center place-content-between">
            <img src='/assets/default-image.jpg' alt="" className="w-[20vw] h-[20vw] md:w-[9vw] md:h-[9vw]"></img>
            <img src='/assets/default-image.jpg' alt="" className="w-[20vw] h-[20vw] md:w-[9vw] md:h-[9vw]"></img>
            <img src='/assets/default-image.jpg' alt="" className="w-[20vw] h-[20vw] md:w-[9vw] md:h-[9vw]"></img> 
          </div>
          <div className="grid justify-items-center col-span-3 lg:col-span-2">
            <img src='/assets/default-image.jpg' alt="" className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw]"></img> 
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-5">
            <h1 className="font-semibold text-4xl">{product.name}</h1>
            <p className="text-xl">
              {product.description}
            </p>
          </div>
          <div className="text-xl space-y-5">
            <p>${product.price.toFixed(2)}</p>
          </div>
          <div className="text-xl space-y-5">
            <InputNumber value={quantity} onValueChange={(e) => setQuantity(e.value)} showButtons />
          </div>
          <div className="flex flex-col space-y-5">
            <Button label="Agregar al carrito" className="bg-slate-300 p-2" onClick={handleAddToCart} />
            <Button label="Comprar" className="bg-slate-300 p-2" onClick={handleBuy} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
