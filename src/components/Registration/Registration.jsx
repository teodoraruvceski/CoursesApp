import { useState, React } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../common/Input/input';
import Button from '../common/Button/Button';
import { register } from '../../services/AuthService';

function Registration() {
  const nav = useNavigate();
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const registerClick = async () => {
    const data = await register(newUser.name, newUser.email, newUser.password);
    if (data.data.successful) {
      setNewUser({
        name: '',
        email: '',
        password: '',

      });
      nav('/login');
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <div className="courses centerRegistrationContent">
      <table className="registration">
        <tr><td className="titleCenter">Registration</td></tr>
        <tr>
          <td className="registrationTd">
            <p className="titles">Name</p>
            <Input value={newUser.name} inputId="name" type="text" className="smallInput" placeholderText="Enter name" onChange={(event) => { setNewUser((prevState) => ({ ...prevState, name: event.target.value })); }} />
          </td>
        </tr>
        <tr>
          <td className="registrationTd">
            <p className="titles">Email</p>
            <Input value={newUser.email} inputId="email" type="text" className="smallInput" placeholderText="Enter email" onChange={(event) => { setNewUser((prevState) => ({ ...prevState, email: event.target.value })); }} />
          </td>
        </tr>
        <tr>
          <td className="registrationTd">
            <p className="titles">Password</p>
            <Input value={newUser.password} inputId="password" type="password" className="smallInput" placeholderText="Enter password" onChange={(event) => { setNewUser((prevState) => ({ ...prevState, password: event.target.value })); }} />
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
