/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';
import '../../App.css';
import courses from '../../recoil/atom/courses';
import authors from '../../recoil/atom/authors';
import { getCourses, getAuthors } from '../../services/CoursesService';
import store from '../../store/index';
import { courseCreated } from '../../store/courses/actionCreators';
import { authorCreated } from '../../store/authors/actionCreators';

function Courses() {
  // const [coursesState, setCoursesState] = useRecoilState(courses);
  // const [authorsState, setAuthorsState] = useRecoilState(authors);
  const [coursesState, setCoursesState] = useState([]);
  const [authorsState, setAuthorsState] = useState([]);
  const [searchContent, setSearchContent] = useState('');
  const [coursesList, setCoursesList] = useState(coursesState);
  const navigate = useNavigate();
  useEffect(() => {
    const state = store.getState();
    const unsubscribe = store.subscribe(() => {
      setCoursesState(store.getState().courses);
      setCoursesList(store.getState().courses);
    });
    if (localStorage.getItem('token') === null) {
      navigate('/login');
    } else {
      // getCourses().then((data) => {
      //   console.log(data.data);
      //   setCoursesState(data.data.result);
      //   setCoursesList(data.data.result);
      // });

      console.log(state);
      setCoursesList(state.courses);

      setAuthorsState(state.authors);
      // getAuthors().then((data) => {
      //   console.log(data.data);
      //   setAuthorsState(data.data.result);
      // });
    }
    return unsubscribe;
  }, []);

  const search = () => {
    if (searchContent.trim() === '') {
      setCoursesList(coursesState);
      return;
    }
    const list = [];
    for (let i = 0; i < coursesState.length; i += 1) {
      // console.log(coursesState[i].title.toLowerCase());
      if (coursesState[i].title.toLowerCase().includes(searchContent.toLowerCase())) {
        list.push(coursesState[i]);
      }
    }
    setCoursesList(list);
  };

  return (
    <div className="courses">
      <table>
        <tr>
          <td width="90%">
            <SearchBar
              labelText={searchContent}
              action={search}
              placeholderText="Enter course name..."
              onChange={(event) => {
                setSearchContent(event.target.value);
              }}
            />

          </td>
          <td width="10%"><Button className="button" text="Add new course" action={() => navigate('/createCourse')} /></td>
        </tr>
      </table>

      <div>
        {
          coursesList?.map((course) => {
            let authorsNames = '';
            for (let i = 0; i < course.authors.length; i += 1) {
              if (authorsNames !== '') { authorsNames += ', '; }
              const n = authorsState.find((element) => element.id === course.authors[i]);
              authorsNames += (n ? n.name : '');
            }

            return (
              <div key={course.id}>

                <CourseCard
                  courseName={course.title}
                  description={course.description}
                  authors={authorsNames}
                  duration={course.duration}
                  creationDate={course.creationDate}
                  courseId={course.id}
                />
              </div>
            );
          })
        }
      </div>

    </div>

  );
}

export default Courses;
