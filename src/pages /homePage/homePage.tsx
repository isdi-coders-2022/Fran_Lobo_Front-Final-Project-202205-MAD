import { useSelector } from 'react-redux';
import { NavBar } from '../../components/layout/nav-bar';
import { Search } from '../../components/layout/search';

import { List } from '../../components/list';
import { iStore } from '../../interfaces/interfaces';
import './homePage.css';
export default function HomePage() {
  const games = useSelector((store: iStore) => store.games);
  return (
    <>
      <Search></Search>
      <NavBar></NavBar>

      <h1>Our last games</h1>

      <List data={games} />
    </>
  );
}
