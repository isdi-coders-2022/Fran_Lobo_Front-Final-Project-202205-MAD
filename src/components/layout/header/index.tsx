import { log } from 'console';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iStore } from '../../../interfaces/interfaces';

export function Header() {
  const user = useSelector((store: iStore) => store.user);

  return (
    <header data-testid="1" className="header">
      <Link to={'home'}>
        <div className="header-logo">
          <img src="/images/Bluffing logo.jpeg" alt="" />
        </div>
      </Link>
      <div className="header-title"></div>
      <div className="header-buttons">
        <Link to={'login'}>
          <button className="notifications"></button>{' '}
        </Link>
        <Link to={'profile'}>
          <button className="avatar">
            <img src="/images/Ejemplo.JPG" alt="" />
          </button>
        </Link>
      </div>
    </header>
  );
}
