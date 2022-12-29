import { useState, useEffect, React } from 'react';
import { Link } from 'react-router-dom';
import Input from '../common/Input/input';
import Button from '../common/Button/Button';
import { register } from '../../services/AuthService';

function Registration() {
  // eslint-disable-next-line no-unused-vars
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  useEffect(() => {

  });
  const registerClick = () => {
    register(newUser.name, newUser.email, newUser.password).then((data) => {
      console.log(data);
      setNewUser({
        name: '',
        email: '',
        password: '',
      });
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
      // const list = document.getElementByTagName('input');
      // for (let i = 0; i < list.length; i += 1) {
      //   list[i].value = '';
      // }
    })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="courses centerRegistrationContent">
      <table className="registration">
        <tr><td className="titleCenter">Registration</td></tr>
        <tr>
          <td className="registrationTd">
            <p className="titles">Name</p>
            <Input inputId="name" type="text" className="smallInput" placeholderText="Enter name" onChange={(event) => { setNewUser((prevState) => ({ ...prevState, name: event.target.value })); }} />
          </td>
        </tr>
        <tr>
          <td className="registrationTd">
            <p className="titles">Email</p>
            <Input inputId="email" type="text" className="smallInput" placeholderText="Enter email" onChange={(event) => { setNewUser((prevState) => ({ ...prevState, email: event.target.value })); }} />
          </td>
        </tr>
        <tr>
          <td className="registrationTd">
            <p className="titles">Password</p>
            <Input inputId="password" type="password" className="smallInput" placeholderText="Enter password" onChange={(event) => { setNewUser((prevState) => ({ ...prevState, password: event.target.value })); }} />
          </td>
        </tr>
        <tr>
          <td className="center registrationTd">
            <Button action={registerClick} className="button" text="Register" />
          </td>

        </tr>
        <tr>
          <td className="center registrationTd">
            If you have an account you can &nbsp;
            <Link href="/login">Login</Link>

          </td>

        </tr>
      </table>

    </div>
  );
}
export default Registration;
