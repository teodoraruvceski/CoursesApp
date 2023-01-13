import { React, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../common/Button/Button';
import Input from '../common/Input/input';
import '../../App.css';
import ListedAuthors from './components/ListedAuthors/ListedAuthors';
import AddAuthor from './components/AddAuthor/AddAuthor';
import AddDuration from './components/AddDuration/AddDuration';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import { createCourse, updateCourse } from '../../services/CoursesService';
import { courseCreated, courseUpdated } from '../../store/courses/actionCreators';
import { store } from '../../store/index';

function CourseForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [newCourseState, setNewCourseState] = useState({
    title: '', description: '', authors: [], duration: 0,
  });
  const [isCreate, setIsCreate] = useState(true);
  useEffect(() => {
    const co = store.getState().courses;
    if (location.state !== null) {
      const idd = location.state.id;
      if (idd !== '' && idd !== undefined) {
        const c = co.find((x) => x.id === idd);
        if (c !== undefined) {
          setIsCreate(false);
          setNewCourseState({
            title: c.title,
            description: c.description,
            authors: c.authors,
            duration: c.duration,
            id: c.id,
          });
        }
      }
    }

    const unsubscribe = store.subscribe(() => {
    });
    return unsubscribe;
  }, []);
  const create = async () => {
    if (!isCreate) {
      if (document.getElementById('description').value.length >= 2
    && newCourseState.duration > 0) {
        const response = await updateCourse(newCourseState);
        store.dispatch(courseUpdated(response.data.result));
        navigate('/courses');
      } else {
        alert('Please, fill in all fields!');
      }
    } else if (store.getState().courses
      .find((element) => element.title === newCourseState.title) === undefined
      && document.getElementById('description').value.length >= 2
      && newCourseState.duration > 0) {
      const response = await createCourse(newCourseState);
      store.dispatch(courseCreated([response.data.result]));
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
              value={newCourseState.title}
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
            <Button className="button" text={isCreate ? 'Create' : 'Save'} action={create} />
          </td>
        </tr>
      </table>
      <div className="element">
        Description
        <textarea
          id="description"
          value={newCourseState.description}
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
              <AddAuthor />
            </td>
            <td className="top">
              <ListedAuthors
                setNewCourseState={setNewCourseState}
                newCourseState={newCourseState}
              />
            </td>
          </tr>
        </table>
        <table className="addAuthor">
          <tr>
            <td className="top">
              <AddDuration setNewCourseState={setNewCourseState} newCourseState={newCourseState} />
            </td>
            <td className="top">
              <CourseAuthors
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

export default CourseForm;
