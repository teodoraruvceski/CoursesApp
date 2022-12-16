import React from 'react';
import '../../../App.css';

function Button({ text, action, name }) {
  return <button name={name} className="button" type="submit" onClick={action}>{text}</button>;
}

export default Button;
