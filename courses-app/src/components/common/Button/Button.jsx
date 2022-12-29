import React from 'react';
import '../../../App.css';

function Button({
  text, action, name, className,
}) {
  return <button name={name} className={className} type="submit" onClick={action}>{text}</button>;
}

export default Button;
