import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';
import '../../App.css';
import courses from '../../recoil/atom/courses';
import authors from '../../recoil/atom/authors';

function Courses() {
  // eslint-disable-next-line no-unused-vars
  const [coursesState, setCoursesState] = useRecoilState(courses);
  // eslint-disable-next-line no-unused-vars
  const [authorsState, setAuthorsState] = useRecoilState(authors);
  const navigate = useNavigate();
  const goToCreate = () => {
    navigate('/createCourse');
  };
  const [searchContent, setSearchContent] = useState('');
  const [coursesList, setCoursesList] = useState(coursesState);

  const search = () => {
    if (searchContent.trim() === '') {
      setCoursesList(coursesState);
      return;
    }
    const list = [];
    for (let i = 0; i < coursesState.length; i += 1) {
      console.log(coursesState[i].title.toLowerCase());
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
          <td width="10%"><Button text="Add new course" action={goToCreate} /></td>
        </tr>
      </table>

      <div>
        {
          coursesList?.map((course) => {
            let authorsNames = '';
            console.log(course.authors);
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
