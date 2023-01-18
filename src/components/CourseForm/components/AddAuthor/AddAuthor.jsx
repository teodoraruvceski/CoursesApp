import { useState, React } from 'react';
import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/input';
import { createAuthor } from '../../../../services/CoursesService';
import { store } from '../../../../store/index';
import { authorCreated } from '../../../../store/authors/actionCreators';

function AddAuthor() {
  const [author, setAuthor] = useState({
    name: '',
  });

  const add = async () => {
    if (document.getElementById('addAuthorInput').value.length >= 2) {
      const response = await createAuthor(author);
      if (response.data.successful) {
        store.dispatch(authorCreated([response.data.result]));
      }
      setAuthor({
        name: '',
      });
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
            value={author.name}
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
