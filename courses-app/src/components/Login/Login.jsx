import { useState, useEffect, React } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../common/Input/input';
import Button from '../common/Button/Button';
import { login } from '../../services/AuthService';

function Login() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  useEffect(() => {

  });
  const loginClick = () => {
    login(newUser.email, newUser.password).then((data) => {
      if (data.data.successful === true) {
        // const { user } = data.data.user;
        console.log(data.data.user.name);
        const token = data.data.result;
        localStorage.setItem('token', token);
        localStorage.setItem('name', data.data.user.name);
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        setNewUser({
          name: '',
          email: '',
          password: '',
        });
        navigate('/courses');
      }
    });
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
