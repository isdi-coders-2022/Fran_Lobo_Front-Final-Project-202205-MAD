import { log } from 'console';
import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { iStore, iUser, iUserApi } from '../../../interfaces/interfaces';
import { loadGameAction } from '../../../reducers/games/action.creators';
import { loadReviewAction } from '../../../reducers/reviews/action.creators';
import { loadUserAction } from '../../../reducers/users/action.creators';

export function Header() {
  const { id } = useParams();
  const user = useSelector((store: iStore) => store.user);
  const dispatcher = useDispatch();

  const navigate = useNavigate();

  const logout = async (ev: SyntheticEvent) => {
    ev.preventDefault();
    localStorage.removeItem('User');
    localStorage.removeItem('Token');
    const mockUser: iUser = {
      name: '',
      secondName: '',
      email: '',
      password: '',
      avatar: '',
      playList: [],
    };

    const mockedUserApi: iUserApi = {
      id: '1',
      token: '12',
      userData: mockUser,
    };

    dispatcher(loadUserAction(mockedUserApi));

    navigate(`/login`);
  };
  return (
    <header data-testid="1" className="header">
      <Link to={'home'}>
        <div className="header-logo">
          <img src="/images/Bluffing logo.jpeg" alt="" />
        </div>
      </Link>
      <div className="header-title"></div>
      <div className="header-buttons">
        {user.userData === undefined ? (
          <Link to={'login'}>
            <button className="notifications"></button>
          </Link>
        ) : (
          <button onClick={logout} className="notifications2"></button>
        )}
        {user.userData === undefined ? (
          <Link to={'profile'}>''</Link>
        ) : (
          <button className="avatar">
            <img src="/images/Ejemplo.JPG" alt="" />
          </button>
        )}
      </div>
    </header>
  );
}
