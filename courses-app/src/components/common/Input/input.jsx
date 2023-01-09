import React from 'react';

import '../../../App.css';

function Input({
  width, labelText, placeholderText, onChange, inputId, type, className, value,
}) {
  return (
    <div>

      <input
        type={type}
        id={inputId}
        width={width}
        className={className}
        contentEditable={labelText}
        placeholder={placeholderText}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Input;
