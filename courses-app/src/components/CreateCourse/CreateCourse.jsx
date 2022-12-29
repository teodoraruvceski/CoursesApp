import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';
import Input from '../common/Input/input';
import '../../App.css';
import ListedAuthors from './components/ListedAuthors/ListedAuthors';
import AddAuthor from './components/AddAuthor/AddAuthor';
import AddDuration from './components/AddDuration/AddDuration';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import { getAuthors, getCourses, createCourse } from '../../services/CoursesService';
// import { mockedAuthorsList, mockedCoursesList } from '../../mockedCoursesList';

function CreateCourse() {
  const navigate = useNavigate();
  const [authorsState, setAuthorsState] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [newCourseState, setNewCourseState] = useState({
    title: '', description: '', authors: [], duration: 0,
  });
  const [coursesState, setCoursesState] = useState([]);
  useEffect(() => {
    getAuthors().then((data) => {
      setAuthorsState(data.data.result);
      console.log(data.data.result);
    });
    getCourses().then((data) => {
      setCoursesState(data.data.result);
      console.log(data.data.result);
    });
  }, []);
  const create = () => {
    console.log(newCourseState);
    console.log(coursesState);
    if (coursesState.find((element) => element.title === newCourseState.title) === undefined
    && document.getElementById('description').value.length >= 2
    && newCourseState.duration > 0) {
      createCourse(newCourseState);
      navigate('/courses');
    } else {
      alert('Please, fill in all fields!');
    }
  };
  return (
    <div className="courses">

      <table className="element">
        <tr>
          <td colSpan="2">Title</td>
        </tr>
        <tr>
          <td width="80%">
            <Input
              className="input"
              width="300px"
              placeholderText="Enter title..."
              onChange={(event) => {
                setNewCourseState((prevState) => ({
                  ...prevState,
                  title: event.target.value,
                }));
              }}
            />
          </td>
          <td width="20%">
            <Button className="button" text="Create" action={create} />
          </td>
        </tr>
      </table>
      <div className="element">
        Description
        <textarea
          id="description"
          onChange={(event) => {
            setNewCourseState((prevState) => ({
              ...prevState,
              description: event.target.value,
            }));
          }}
          className="textarea"
        />

      </div>
      <div className="element addAuthor">
        <table className="addAuthor" width="100%">
          <tr>
            <td className="top">
              <AddAuthor setAuthorsState={setAuthorsState} authorsState={authorsState} />
            </td>
            <td className="top">
              <ListedAuthors
                setNewCourseState={setNewCourseState}
                authors={authorsState}
                newCourseState={newCourseState}
              />
            </td>
          </tr>
        </table>
        <table className="addAuthor">
          <tr>
            <td className="top">
              <AddDuration setNewCourseState={setNewCourseState} />
            </td>
            <td className="top">
              <CourseAuthors
                authors={authorsState}
                newCourseState={newCourseState}
                setNewCourseState={setNewCourseState}
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CreateCourse;
