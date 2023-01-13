import React from 'react';
import '../../../../App.css';
import Button from '../../../common/Button/Button';
import { store } from '../../../../store/index';

function CourseAuthors({ newCourseState, setNewCourseState }) {
  const remove = (event) => {
    const newAuthors = newCourseState.authors
      .filter((element) => element !== event.currentTarget.name);
    setNewCourseState((prevState) => ({
      ...prevState,
      authors: newAuthors,
    }));
  };
  return (
    <table className="test">
      <tr><td align="center" colSpan="2"><p className="titles">Course authors</p></td></tr>
      {newCourseState.authors !== undefined && newCourseState.authors.length > 0
        ? newCourseState.authors.map((author) => (
          <tr key={store.getState().authors.find((element) => element.id === author)?.id}>
            <td className="names">{store.getState().authors.find((element) => element.id === author)?.name}</td>
            <td className="buttons"><Button className="button" name={author} action={remove} text="Remove" /></td>
          </tr>
        ))
        : <tr><td className="center">Authors list is empty</td></tr>}
    </table>
  );
}

export default CourseAuthors;
