import React from 'react';
import { useRecoilState } from 'recoil';
import '../../../../App.css';
import authors from '../../../../recoil/atom/authors';
import newCourse from '../../../../recoil/atom/newCourse';
import Button from '../../../common/Button/Button';

function CourseAuthors({ list }) {
  // eslint-disable-next-line no-unused-vars
  const [authorsState, setAuthorsState] = useRecoilState(authors);
  const [newCourseState, setNewCourseState] = useRecoilState(newCourse);
  const remove = (event) => {
    // const removingAuth = authorsState.find((element) => element.id === event.currentTarget.name);
    const newAuthors = newCourseState.authors
      .filter((element) => element !== event.currentTarget.name);
    // const pom = [];
    console.log(newAuthors);
    setNewCourseState((prevState) => ({
      ...prevState,
      authors: newAuthors,
    }));
  };
  return (
    <table className="test">
      <tr><td align="center" colSpan="2"><p className="titles">Course authors</p></td></tr>
      {list !== undefined && list.length > 0
        ? newCourseState.authors.map((author) => (
          <tr key={authorsState.find((element) => element.id === author).id}>
            <td className="names">{authorsState.find((element) => element.id === author).name}</td>
            <td className="buttons"><Button name={author} action={remove} text="Remove" /></td>
          </tr>
        ))
        : <tr><td className="center">Authors list is empty</td></tr>}
    </table>
  );
}

export default CourseAuthors;
