/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import '../../../App.css';
import { FaTrashAlt } from 'react-icons/fa';
import { BsFillPencilFill } from 'react-icons/bs';

function Button({
  text, action, name, className,
}) {
  if (text === 'delete') { return <button name={name} className={className} type="submit" onClick={action}><FaTrashAlt /></button>; }
  if (text === 'edit') { return <button name={name} className={className} type="submit" onClick={action}><BsFillPencilFill /></button>; }
  return <button name={name} className={className} type="submit" onClick={action}>{text}</button>;
}

export default Button;
