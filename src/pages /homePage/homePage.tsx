import { useSelector } from 'react-redux';
import { List } from '../../components/list';
import { iStore } from '../../interfaces/interfaces';
import './homePage.css';
export default function HomePage() {
  const games = useSelector((store: iStore) => store.games);
  return (
    <>
      <h1>Our last games</h1>
      <List data={games} />
    </>
  );
}
