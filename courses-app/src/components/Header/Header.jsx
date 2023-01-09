import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import Button from '../common/Button/Button';
import '../../App.css';
import { getToken, getUser } from '../../services/AuthService';
import { userLoggedOut } from '../../store/user/actionCreators';
import store from '../../store/index';
import { courseCreated } from '../../store/courses/actionCreators';
import { authorCreated } from '../../store/authors/actionCreators';

function Header() {
  const navigate = useNavigate();
  console.log('user:', getUser());
  // console.log(`token:${getToken()}`);
  const logout = () => {
    store.dispatch(userLoggedOut());
    localStorage.clear();
    store.dispatch(courseCreated([]));
    store.dispatch(authorCreated([]));
    navigate('/login');
  };
  return (
    <table className="header">
      <tr>
        <td width="10%"><Logo /></td>
        <td width="70%"> </td>
        {
          getToken() && <td width="10%">{getUser()}</td>
        }
        {
        getToken()
        && (
        <td width="10%">
          <Button
            className="button"
            text="Logout"
            action={logout}
          />

        </td>
        )
        }
      </tr>
    </table>

  );
}

export default Header;
