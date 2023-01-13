import { useState, useEffect, React } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../common/Input/input';
import Button from '../common/Button/Button';
import { login, me, getToken } from '../../services/AuthService';
import { store } from '../../store/index';
import { userLoggedIn } from '../../store/user/actionCreators';

function Login() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  useEffect(() => {
    localStorage.clear();
  }, []);
  const loginClick = async () => {
    const data = await login(newUser.email, newUser.password);
    if (data.data?.successful) {
      const token = data.data.result;
      localStorage.setItem('token', token);
      const data2 = await me(token);
      if (data2.data.successful) {
        localStorage.setItem('user', data2.data.result);
      }
      setNewUser({
        name: '',
        email: '',
        password: '',
      });
      const u = data2.data.result;
      store.dispatch(userLoggedIn(u.name, u.email, getToken(), u.role));

      navigate('/courses');
    }
  };

  return (
    <div className="courses centerRegistrationContent">
      <table className="registration">
        <tbody>
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
        </tbody>
      </table>

    </div>
  );
}
export default Login;
