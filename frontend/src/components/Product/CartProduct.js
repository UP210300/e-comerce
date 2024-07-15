import React, { useState } from "react";
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import { InputNumber } from 'primereact/inputnumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function BasicDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <Card className="relative">
                <div className="absolute top-2 right-2">
                    <FontAwesomeIcon icon={faTrash} className="text-gray-500 hover:text-red-500 cursor-pointer" />
                </div>
                <div className="flex flex-row items-center">
                    <Checkbox onChange={e => setChecked(e.checked)} checked={checked} className="mr-4" />
                    <img src={require('../Assets/default-image.jpg')} className="w-[20vw] h-[20vw] md:w-[9vw] md:h-[9vw]" alt="Imagen" />
                    <div className="ml-4">
                        <p className="font-bold text-xl mb-1">Producto</p>
                        <p>$100.00</p>
                    </div>
                    <div className="col-span-1 flex items-end justify-end">
                        <div>
                            <InputNumber className="w-[10px]" showButtons />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
