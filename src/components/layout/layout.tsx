import { ReactNode } from 'react';
import { iRouterItem } from '../../interfaces/interfaces';
import { Footer } from './footer';
import { Header } from './header';

export function Layout({
  children,
  navOptions,
}: {
  children: ReactNode;
  navOptions: iRouterItem[];
}) {
  return (
    <>
      <div className="phone">
        <Header navOptions={navOptions} />
        <section className="title">
          <h1>BLUFFING</h1>
          <p>Explore millions of games according to your taste</p>
        </section>
        <section className="search">
          <div className="search-inner">
            <button className="search-button">
              <img src="/images/lupa.png" className="lupa" alt="" />
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="Search your Game"
            />
          </div>
        </section>

        <nav className="navigation">
          <a href="./home.html" className="navigation-item active">
            Home
          </a>
          <a href="./pages/ranking.html" className="navigation-item">
            Ranking
          </a>
          <a href="./pages/ranking.html" className="navigation-item">
            Favourite
          </a>
          <a href="./pages/themes.html" className="navigation-item">
            Themes
          </a>
        </nav>
        <section className="playlists"></section>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
