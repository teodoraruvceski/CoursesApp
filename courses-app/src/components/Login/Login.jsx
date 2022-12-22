import { useState, useEffect, React } from 'react';
import { Link } from 'react-router-dom';
import Input from '../common/Input/input';
import Button from '../common/Button/Button';

function Login() {
  // eslint-disable-next-line no-unused-vars
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  useEffect(() => {

  });
  const login = () => {

  };

  return (
    <div className="courses centerRegistrationContent">
      <table className="registration">
        <tr><td className="titleCenter">Login</td></tr>

        <tr>
          <td className="registrationTd">
            <p className="titles">Email</p>
            <Input className="loginInput" placeholderText="Enter email" onChange={(event) => { setNewUser((prevState) => ({ ...prevState, email: event.target.value })); }} />
          </td>
        </tr>
        <tr>
          <td className="registrationTd">
            <p className="titles">Password</p>
            <Input className="loginInput" placeholderText="Enter password" onChange={(event) => { setNewUser((prevState) => ({ ...prevState, password: event.target.value })); }} />
          </td>
        </tr>
        <tr>
          <td className="center registrationTd">
            <Button action={login} text="Login" />
          </td>

        </tr>
        <tr>
          <td className="center registrationTd">
            If you have an account you can &nbsp;
            <Link href="/Registration">Registration</Link>

          </td>

        </tr>
      </table>

    </div>
  );
}
export default Login;
