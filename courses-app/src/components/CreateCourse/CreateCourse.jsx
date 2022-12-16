import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '../common/Button/Button';
import Input from '../common/Input/input';
import '../../App.css';
import ListedAuthors from './components/ListedAuthors/ListedAuthors';
import AddAuthor from './components/AddAuthor/AddAuthor';
import AddDuration from './components/AddDuration/AddDuration';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import newCourse from '../../recoil/atom/newCourse';
import courses from '../../recoil/atom/courses';
// import { mockedAuthorsList, mockedCoursesList } from '../../mockedCoursesList';

function CreateCourse() {
  const navigate = useNavigate();
  const reset = useResetRecoilState(newCourse);
  // eslint-disable-next-line no-unused-vars
  const [newCourseState, setNewCourseState] = useRecoilState(newCourse);
  const [coursesState, setCoursesState] = useRecoilState(courses);
  const create = () => {
    if (coursesState.find((element) => element.title === newCourseState.title) === undefined
    && document.getElementById('description').value.length >= 2
    && newCourseState.duration > 0) {
      console.log(newCourseState);
      setCoursesState((prevState) => ([...prevState, newCourseState]));
      // useResetRecoilState(newCourse);
      reset();
      navigate('/');
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
              width="300px"
              placeholderText="Enter title..."
              onChange={(event) => {
                setNewCourseState((prevState) => ({
                  ...prevState,
                  id: uuidv4(),
                  title: event.target.value,
                }));
              }}
            />
          </td>
          <td width="20%">
            <Button text="Create" action={create} />
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
              creationDate: new Date(),
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
              <ListedAuthors />
            </td>
          </tr>
        </table>
        <table className="addAuthor">
          <tr>
            <td className="top">
              <AddDuration />
            </td>
            <td className="top">
              <CourseAuthors list={newCourseState.authors} />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CreateCourse;
