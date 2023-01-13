import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../common/Button/Button';
import { store } from '../../../../store/index';

function ListedAuthors({ newCourseState, setNewCourseState }) {
  const authors = useSelector((state) => state.authors);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => window.location.reload(false));
    unsubscribe();
  });
  const addAuthor = (event) => {
    const authorName = event.currentTarget.name;
    const addingAuthor = authors?.find((element) => element.name === authorName);
    const provera = newCourseState.authors.find((element) => element === addingAuthor.id);
    if (provera === undefined) {
      const oldAuthors = [...newCourseState.authors, addingAuthor.id];
      setNewCourseState((prevState) => ({ ...prevState, authors: oldAuthors }));
    }
  };
  return (
    <table className="test">
      <tr><td align="center" colSpan="2"><p className="titles"> Authors</p></td></tr>
      {authors.map((author) => (
        <tr key={`la${author.id}`}>
          <td className="names">{author.name}</td>
          <td className="buttons"><Button className="button" name={author.name} action={addAuthor} text="Add author" /></td>
        </tr>
      ))}
    </table>
  );
}

export default ListedAuthors;
