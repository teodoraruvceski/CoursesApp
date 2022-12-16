import React from 'react';

import '../../../App.css';

function Input({
  width, labelText, placeholderText, onChange, inputId, type,
}) {
  return (
    <div>

      <input type={type} id={inputId} width={width} className="input" contentEditable={labelText} placeholder={placeholderText} onChange={onChange} />
    </div>
  );
}

export default Input;
