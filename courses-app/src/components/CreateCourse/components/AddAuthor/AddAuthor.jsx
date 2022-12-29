/* eslint-disable no-unused-vars */
import { useState, useEffect, React } from 'react';
import { useRecoilState } from 'recoil';
import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/input';
import authors from '../../../../recoil/atom/authors';
import { createAuthor, getAuthors } from '../../../../services/CoursesService';

function AddAuthor({ authorsState, setAuthorsState }) {
  // const [authorsState, setAuthorsState] = useRecoilState(authors);
  const [author, setAuthor] = useState({
    name: '',
  });

  const add = () => {
    if (document.getElementById('addAuthorInput').value.length >= 2) {
      setAuthorsState((prevVal) => [...prevVal, author]);
      createAuthor(author).then((data) => {
        console.log(data);
      });
      console.log(author);
      setAuthor({
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
              }));
            }}
            placeholderText="Enter author name..."
          />

        </td>
      </tr>
      <tr>
        <td className="center">
          <Button className="button" action={add} text="Create author" />
        </td>
      </tr>
    </table>
  );
}

export default AddAuthor;
