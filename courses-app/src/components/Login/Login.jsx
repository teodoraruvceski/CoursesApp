/* eslint-disable no-unused-vars */
import { useState, useEffect, React } from 'react';
import { createRoutesFromElements, Link, useNavigate } from 'react-router-dom';
import Input from '../common/Input/input';
import Button from '../common/Button/Button';
import { login } from '../../services/AuthService';
import { getAuthors, getCourses } from '../../services/CoursesService';
import store from '../../store/index';
import { userLoggedIn } from '../../store/user/actionCreators';
import { courseCreated } from '../../store/courses/actionCreators';
import { authorCreated } from '../../store/authors/actionCreators';

function Login() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  useEffect(() => {
    localStorage.clear();
  }, []);
  const loginClick = async () => {
    try {
      const data = await login(newUser.email, newUser.password);
      console.log(data);
      if (data.data.successful === true) {
        // const { user } = data.data.user;
        console.log(data.data);
        const token = data.data.result;
        console.log(data.data.user);
        localStorage.setItem('token', token);
        localStorage.setItem('name', data.data.user.name);
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        setNewUser({
          name: '',
          email: '',
          password: '',
        });
        store.dispatch(userLoggedIn(data.data.user.name, data.data.user.email, data.data.result));
        const courses = await getCourses();
        const authors = await getAuthors();
        // console.log(courses.data.result);
        store.dispatch(courseCreated(courses.data.result));
        store.dispatch(authorCreated(authors.data.result));
        navigate('/courses');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="courses centerRegistrationContent">
      <table className="registration">
        <tr><td className="titleCenter">Login</td></tr>

        <tr>
          <td className="registrationTd">
            <p className="titles">Email</p>
            <Input type="text" inputId="email" className="loginInput" placeholderText="Enter email" onChange={(event) => { setNewUser((prevState) => ({ ...prevState, email: event.target.value })); }} />
          </td>
        </tr>
        <tr>
          <td className="registrationTd">
            <p className="titles">Password</p>
            <Input type="password" inputId="password" className="loginInput" placeholderText="Enter password" onChange={(event) => { setNewUser((prevState) => ({ ...prevState, password: event.target.value })); }} />
          </td>
        </tr>
        <tr>
          <td className="center registrationTd">
            <Button className="button" action={loginClick} text="Login" />
          </td>

        </tr>
        <tr>
          <td className="center registrationTd">
            If you have an account you can &nbsp;
            <Link to="/registration">Registration</Link>

          </td>

        </tr>
      </table>

    </div>
  );
}
export default Login;
