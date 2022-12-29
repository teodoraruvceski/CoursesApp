import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import Button from '../common/Button/Button';
import '../../App.css';

function Header() {
  const navigate = useNavigate();

  return (
    <table className="header">
      <tr>
        <td width="10%"><Logo /></td>
        <td width="70%"> </td>
        {
          localStorage.getItem('token') && <td width="10%">{localStorage.getItem('name')}</td>
        }
        {
        localStorage.getItem('token')
        && (
        <td width="10%">
          <Button
            className="button"
            text="Logout"
            action={() => {
              localStorage.clear();
              navigate('/login');
            }}
          />

        </td>
        )
        }
      </tr>
    </table>

  );
}

export default Header;
