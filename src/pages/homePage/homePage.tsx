import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../../components/layout/nav-bar';
import { Search } from '../../components/layout/search';

import { List } from '../../components/list';
import { iStore } from '../../interfaces/interfaces';
import { loadGameAction } from '../../reducers/games/action.creators';
import { loadReviewAction } from '../../reducers/reviews/action.creators';
import { ApiGames } from '../../services/api';
import './homePage.css';
export default function HomePage() {
  const apiGames = new ApiGames();
  const dispatcher = useDispatch();

  const load = async () => {
    // const reviews = await apiGames.getAllReview();
    // const games = await apiGames.getAllGame();
    //dispatcher(loadLoggedUsersAction([user]));
    // dispatcher(loadReviewAction(reviews));
    // dispatcher(loadGameAction(games));
  };

  load();

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
