import React from 'react';
import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/input';

function SearchBar({
  labelText, action, placeholderText, onChange,
}) {
  return (
    <table className="search">
      <tr>
        <td>
          <Input className="input" placeholderText={placeholderText} labelText={labelText} onChange={onChange} />
        </td>
        <td><Button text="Search" action={action} /></td>
      </tr>
    </table>
  );
}

export default SearchBar;
