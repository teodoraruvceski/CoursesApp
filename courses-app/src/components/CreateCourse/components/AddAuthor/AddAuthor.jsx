import { useState, useEffect, React } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/input';
import authors from '../../../../recoil/atom/authors';

function AddAuthor() {
  const [authorsState, setAuthorsState] = useRecoilState(authors);
  const [author, setAuthor] = useState({
    id: -1,
    name: '',
  });
  useEffect(() => {
    // Update the document title using the browser API
    console.log(authorsState);
  }, [authorsState]);
  const add = () => {
    if (document.getElementById('addAuthorInput').value.length >= 2) {
      setAuthorsState((prevVal) => [...prevVal, author]);
      console.log(author);
      setAuthor({
        id: -1,
        name: '',
      });
      const element = document.getElementById('addAuthorInput');
      element.value = '';
    }
  };
  return (
    <table>
      <tr>
        <td className="center">
          <p className="titles"> Add author</p>
        </td>
      </tr>
      <tr>
        <td>
          Author name
        </td>
      </tr>
      <tr>
        <td>
          <Input
            className="input"
            inputId="addAuthorInput"
            onChange={(event) => {
              setAuthor((prevState) => ({
                ...prevState,
                name: event.target.value,
                id: uuidv4(),
              }));
            }}
            placeholderText="Enter author name..."
          />

        </td>
      </tr>
      <tr>
        <td className="center">
          <Button action={add} text="Create author" />
        </td>
      </tr>
    </table>
  );
}

export default AddAuthor;
