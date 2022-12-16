import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../common/Button/Button';
import '../../App.css';

function Header() {
  // const name = 'button';
  return (
    <table className="header">
      <tr>
        <td width="10%"><Logo /></td>
        <td width="70%"> </td>
        <td width="10%">Paul</td>
        <td width="10%"><Button text="Logout" action={() => { console.log('Button click!'); }} /></td>
      </tr>
    </table>

  );
}

export default Header;
