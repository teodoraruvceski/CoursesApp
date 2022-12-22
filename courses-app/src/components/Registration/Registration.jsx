import { useState, useEffect, React } from 'react';
import { Link } from 'react-router-dom';
import Input from '../common/Input/input';
import Button from '../common/Button/Button';

function Registration() {
  // eslint-disable-next-line no-unused-vars
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  useEffect(() => {

  });
  const register = () => {

  };

  return (
    <div className="courses centerRegistrationContent">
      <table className="registration">
        <tr><td className="titleCenter">Registration</td></tr>
        <tr>
          <td className="registrationTd">
            <p className="titles">Name</p>
            <Input className="smallInput" placeholderText="Enter name" onChange={(event) => { setNewUser((prevState) => ({ ...prevState, name: event.target.value })); }} />
          </td>
        </tr>
        <tr>
          <td className="registrationTd">
            <p className="titles">Email</p>
            <Input className="smallInput" placeholderText="Enter email" onChange={(event) => { setNewUser((prevState) => ({ ...prevState, email: event.target.value })); }} />
          </td>
        </tr>
        <tr>
          <td className="registrationTd">
            <p className="titles">Password</p>
            <Input className="smallInput" placeholderText="Enter password" onChange={(event) => { setNewUser((prevState) => ({ ...prevState, password: event.target.value })); }} />
          </td>
        </tr>
        <tr>
          <td className="center registrationTd">
            <Button action={register} text="Register" />
          </td>

        </tr>
        <tr>
          <td className="center registrationTd">
            If you have an account you can &nbsp;
            <Link href="/Registration">Login</Link>

          </td>

        </tr>
      </table>

    </div>
  );
}
export default Registration;
