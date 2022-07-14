import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../../components/layout/nav-bar';
import { List } from '../../components/list';
import { iStore } from '../../interfaces/interfaces';

export function favouritePage() {
  const dispatcher = useDispatch();

  const load = async () => {};

  load();

  const games = useSelector((store: iStore) => store.user.id);
  return (
    <>
      <NavBar></NavBar>

      <h1>Favourites:</h1>

      <List data={games} />
    </>
  );
}
