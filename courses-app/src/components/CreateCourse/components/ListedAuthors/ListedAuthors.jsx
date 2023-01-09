import { React } from 'react';

import Button from '../../../common/Button/Button';

function ListedAuthors({ newCourseState, setNewCourseState, authors }) {
  // eslint-disable-next-line no-unused-vars
  const addAuthor = (event) => {
    const authorName = event.currentTarget.name;
    const addingAuthor = authors.find((element) => element.name === authorName);
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
        <tr key={author.id}>
          <td className="names">{author.name}</td>
          <td className="buttons"><Button className="button" name={author.name} action={addAuthor} text="Add author" /></td>
        </tr>
      ))}
    </table>
  );
}

export default ListedAuthors;
