import React from 'react';
import { useRecoilState } from 'recoil';

import Button from '../../../common/Button/Button';
import authors from '../../../../recoil/atom/authors';
import newCourse from '../../../../recoil/atom/newCourse';

function ListedAuthors() {
  // eslint-disable-next-line no-unused-vars
  const [authorsState, setAuthorsState] = useRecoilState(authors);
  const [newCourseState, setNewCourseState] = useRecoilState(newCourse);
  const addAuthor = (event) => {
    const authorName = event.currentTarget.name;
    const addingAuthor = authorsState.find((element) => element.name === authorName);
    const provera = newCourseState.authors.find((element) => element === addingAuthor.id);
    if (provera === undefined) {
      const oldAuthors = [...newCourseState.authors, addingAuthor.id];
      setNewCourseState((prevState) => ({ ...prevState, authors: oldAuthors }));
    }
  };
  return (
    <table className="test">
      <tr><td align="center" colSpan="2"><p className="titles"> Authors</p></td></tr>
      {authorsState.map((author) => (
        <tr key={author.id}>
          <td className="names">{author.name}</td>
          <td className="buttons"><Button name={author.name} action={addAuthor} text="Add author" /></td>
        </tr>
      ))}
    </table>
  );
}

export default ListedAuthors;
