import React from 'react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import './App.css';

function App() {
  return (
    <div>
      <Header />
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
          element={<CourseForm />}
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
        <Route
          path="/courseInfo"
          element={<CourseInfo />}
        />

      </Routes>
    </div>

  );
}

export default App;
