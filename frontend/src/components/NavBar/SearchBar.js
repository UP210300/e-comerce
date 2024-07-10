import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

export default function BasicDemo() {
  const [value, setValue] = useState('');

  return (
    <div className="card justify-content-center flex">
      <InputText value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
