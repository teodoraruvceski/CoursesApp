import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
// import { mockedAuthorsList, mockedCoursesList } from './mockedCoursesList';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
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
          path="/"
          element={<Courses />}
        />
        {/* The next line is very important for the Navigate component to work */}
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

      </Routes>
    </div>

  );
}

export default App;
