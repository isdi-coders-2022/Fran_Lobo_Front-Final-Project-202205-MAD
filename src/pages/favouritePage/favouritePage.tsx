import { useSelector } from 'react-redux';
import { CardFav } from '../../components/card/CardFav';
import { NavBar } from '../../components/layout/nav-bar';
import { List } from '../../components/list';
import { iStore } from '../../interfaces/interfaces';

export function FavouritePage() {
  const load = async () => {};

  load();

  const allGames = useSelector((store: iStore) => store.games);
  const user = useSelector((store: iStore) => store.user.userData);

  if (user === undefined) {
    return <h2>Log in to see your favourite games</h2>;
  }

  const games = allGames.filter((game) =>
    user.playList.some((id) => game._id === id)
  );

  console.log(games);

  return (
    <>
      <NavBar></NavBar>

      <h1>Favourites:</h1>

      <ul>
        {games.map((item) => (
          <li key={item._id as string}>
            <CardFav game={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
