import { Link } from 'react-router-dom';
import { iRouterItem } from '../../../interfaces/interfaces';

export function Header({ navOptions }: { navOptions: iRouterItem[] }) {
  navOptions = navOptions.filter((item) => (item.path !== '*' ? item : ''));
  navOptions = navOptions.filter((item) =>
    item.path !== '/details/:id' ? item : ''
  );
  return (
    <header className="header">
      <Link to={'home'}>
        <div className="header-logo">
          <img src="/images/Bluffing logo.jpeg" alt="" />
        </div>
      </Link>
      <div className="header-title"></div>
      <div className="header-buttons">
        <Link to={'login'}>
          <button className="notifications">
            <i className="ai-bell"></i>
          </button>{' '}
        </Link>

        <button className="avatar">
          <img src="/images/Ejemplo.JPG" alt="" />
        </button>
      </div>
    </header>
  );
}
