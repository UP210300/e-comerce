import React from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

function ProductDetail() {
  return (
    <div>
      <div className="grid md:grid-cols-2 space-y-10 md:space-y-0 md:space-x-10">
        <div className="grid grid-cols-3 gap-y-8 md:gap-y-4">
            <div className="col-span-3 flex flex-row lg:grid lg:col-span-1 justify-items-center items-center place-content-between">
                <img src={require('../Assets/default-image.jpg')} alt="" className="w-[20vw] h-[20vw] md:w-[9vw] md:h-[9vw]"></img>
                <img src={require('../Assets/default-image.jpg')} alt="" className="w-[20vw] h-[20vw] md:w-[9vw] md:h-[9vw]"></img>
                <img src={require('../Assets/default-image.jpg')} alt="" className="w-[20vw] h-[20vw] md:w-[9vw] md:h-[9vw]"></img> 
            </div>
            <div className="grid justify-items-center col-span-3 lg:col-span-2">
               <img src={require('../Assets/default-image.jpg')} alt="" className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw]"></img> 
            </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-5">
            <h1 className="font-semibold text-4xl">Producto</h1>
            <p className="text-xl">
              Detalle de producto 


              
            </p>
          </div>
          <div className="text-xl space-y-5">
            <p>$100.00</p>
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
