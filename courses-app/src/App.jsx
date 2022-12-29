import React from 'react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
// import { mockedAuthorsList, mockedCoursesList } from './mockedCoursesList';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import './App.css';

function App() {
  // const onPress = () => { console.log('click'); };
  // const props = {
  //   action: onPress,
  //   name: 'Click',
  // };
  return (
    <div>
      <Header />
      {/* <Courses coursesList={mockedCoursesList} authorsList={mockedAuthorsList} /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate to="/login" />}
        />
        <Route
          path="/courses"
          element={<Courses />}
        />
        <Route
          path="/createCourse"
          element={<CreateCourse />}
        />
        <Route
          path="/registration"
          element={<Registration />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/courseInfo"
          element={<CourseInfo />}
        />

      </Routes>
    </div>

  );
}

export default App;
