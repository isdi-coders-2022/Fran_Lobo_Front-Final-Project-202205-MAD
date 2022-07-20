import { ReactNode } from 'react';

import { Header } from './header';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="phone">
        <Header />
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
