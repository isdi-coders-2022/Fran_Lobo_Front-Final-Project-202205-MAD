import { iRouterItem } from '../../../interfaces/interfaces';

export function Header({ navOptions }: { navOptions: iRouterItem[] }) {
  navOptions = navOptions.filter((item) => (item.path !== '*' ? item : ''));
  navOptions = navOptions.filter((item) =>
    item.path !== '/details/:id' ? item : ''
  );
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/images/Bluffing logo.jpeg" alt="" />
      </div>
      <div className="header-title">Home</div>
      <div className="header-buttons">
        <button className="notifications">
          <i className="ai-bell"></i>
        </button>
        <button className="avatar">
          <img src="/images/Ejemplo.JPG" alt="" />
        </button>
      </div>
    </header>
  );
}
