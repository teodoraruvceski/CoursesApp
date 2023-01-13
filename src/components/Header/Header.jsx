import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import Button from '../common/Button/Button';
import '../../App.css';
import { getToken, getUser, logout } from '../../services/AuthService';
import { userLoggedOut } from '../../store/user/actionCreators';
import { store } from '../../store/index';
import { courseCleared } from '../../store/courses/actionCreators';
import { authorCleared } from '../../store/authors/actionCreators';

function Header() {
  const navigate = useNavigate();
  const logoutClick = async () => {
    store.dispatch(userLoggedOut());
    store.dispatch(courseCleared());
    store.dispatch(authorCleared());
    await logout();
    localStorage.clear();
    navigate('/login');
  };
  return (
    <table className="header">
      <tbody>
        <tr>
          <td width="10%"><Logo /></td>
          <td width="70%"> </td>
          {
          getToken() && <td width="10%">{getUser()?.name}</td>
        }
          {
        getToken()
        && (
        <td width="10%">
          <Button
            className="button"
            text="Logout"
            action={logoutClick}
          />

        </td>
        )
        }
        </tr>
      </tbody>
    </table>

  );
}

export default Header;
