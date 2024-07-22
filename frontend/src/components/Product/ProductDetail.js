import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

function ProductDetail() {
  const { id } = useParams(); // Obtener el id del producto de la URL
  const [product, setProduct] = useState(null);

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

  return (
    <div>
      <div className="grid md:grid-cols-2 space-y-10 md:space-y-0 md:space-x-10">
        <div className="grid grid-cols-3 gap-y-8 md:gap-y-4">
            <div className="col-span-3 flex flex-row lg:grid lg:col-span-1 justify-items-center items-center place-content-between">
                <img src={require('../assets/default-image.jpg')} alt="" className="w-[20vw] h-[20vw] md:w-[9vw] md:h-[9vw]"></img>
                <img src={require('../assets/default-image.jpg')} alt="" className="w-[20vw] h-[20vw] md:w-[9vw] md:h-[9vw]"></img>
                <img src={require('../assets/default-image.jpg')} alt="" className="w-[20vw] h-[20vw] md:w-[9vw] md:h-[9vw]"></img> 
            </div>
            <div className="grid justify-items-center col-span-3 lg:col-span-2">
               <img src={require('../assets/default-image.jpg')} alt="" className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw]"></img> 
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
            <InputNumber showButtons />
          </div>
          <div className="flex flex-col space-y-5" >
            <Button label="Agregar al carrito" className="bg-slate-300 p-2" />
            <Button label="Comprar" className="bg-slate-300 p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
