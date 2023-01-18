import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';
import '../../App.css';
import { store } from '../../store/index';
import { getUser } from '../../services/AuthService';
import { getCourses, getAuthors } from '../../services/CoursesService';
import { courseSet } from '../../store/courses/actionCreators';
import { authorSet } from '../../store/authors/actionCreators';

function Courses() {
  const [searchContent, setSearchContent] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [changes,setChanges]=useState(true);
  const coursesState = useSelector((state) => state.courses);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => setChanges(!changes));

    const get = async () => {
      const courses = await getCourses();
      const authors = await getAuthors();
      store.dispatch(courseSet(courses.data.result));
      store.dispatch(authorSet(authors.data.result));
      setIsLoading(false);
    };
    get();
    if (localStorage.getItem('token') === null) {
      navigate('/login');
    }
    return unsubscribe();
  }, [changes]);

  // const search = () => {
  //   if (searchContent.trim() === '') {
  //     // setCoursesList(coursesState);
  //     return;
  //   }
  //   const list = [];
  //   for (let i = 0; i < coursesState.length; i += 1) {
  //     if (coursesState[i].title.toLowerCase().includes(searchContent.toLowerCase())) {
  //       list.push(coursesState[i]);
  //     }
  //   }
  //   // setCoursesList(list);
  // };
  const ifAdmin = () => {
    if (getUser().role === 'admin') {
      return true;
    }
    return false;
  };
  return (
    <div className="courses">
      <table>
        <tbody>
          <tr>
            <td width="90%">
              <SearchBar
                labelText={searchContent}
                // action={search}
                placeholderText="Enter course name..."
                onChange={(event) => {
                  setSearchContent(event.target.value);
                }}
              />

            </td>
            {ifAdmin() && (
            <td width="10%">
              <Button
                className="button"
                text="Add new course"
                action={() => navigate('/createCourse')}
              />

            </td>
            )}
          </tr>
        </tbody>
      </table>

      <div>
        {

          (!isLoading && searchContent.trim() === '' ? coursesState : coursesState.filter((x) => x.title.includes(searchContent.trim())))?.map((course) => {
            let authorsNames = '';
            for (let i = 0; i < course.authors.length; i += 1) {
              if (authorsNames !== '') { authorsNames += ', '; }
              const n = store.getState().authors
                .find((element) => element.id === course.authors[i]);
              authorsNames += (n ? n.name : '');
            }

            return (
              <div>
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
