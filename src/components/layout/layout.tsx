import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { iRouterItem, iStore } from '../../interfaces/interfaces';

import { Header } from './header';

export function Layout({
  children,
  navOptions,
}: {
  children: ReactNode;
  navOptions: iRouterItem[];
}) {
  const user = useSelector((store: iStore) => store.user);

  return (
    <>
      <div className="phone">
        <Header navOptions={navOptions} />
        <section className="title">
          <h1>BLUFFING</h1>
          <p>Explore millions of games according to your taste</p>
        </section>

        <section className="playlists"></section>
        <main>{children}</main>
      </div>
    </>
  );
}
