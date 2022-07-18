import { Link } from 'react-router-dom';

export function Header() {
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
          <button className="notifications">
            <i className="ai-bell"></i>
          </button>{' '}
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
