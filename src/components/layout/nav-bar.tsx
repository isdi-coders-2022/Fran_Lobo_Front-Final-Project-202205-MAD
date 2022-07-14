import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <nav className="navigation">
      <Link to="home" className="navigation-item active">
        Home
      </Link>
      <Link to="ranking" className="navigation-item">
        Ranking
      </Link>
      <Link to="" className="navigation-item">
        Favourite
      </Link>
      <Link to="info" className="navigation-item">
        + Info
      </Link>
    </nav>
  );
}
