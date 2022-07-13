import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ApiGames } from '../../services/api';
import { iStore } from '../../interfaces/interfaces';
import { loadUserAction } from '../../reducers/users/action.creators';

export default function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const games = useSelector((store: iStore) => store.games);
  const user = useSelector((store: iStore) => store.user);
  const game = games.find((item) => item._id === id);
  const apiGames = new ApiGames();

  const addFavourite = () => {
    apiGames.updateOneUser(user.userData).then((resp) => {
      dispatch(loadUserAction({ ...user, userData: resp }));
    });
  };

  return (
    <>
      {user && <h1>Si hay users</h1>}
      {!user && <h1>No hay users</h1>}
      <div className="details-page">
        <img
          onClick={addFavourite}
          src="/images/juego-de-mesa.png"
          className="favouriteButton"
          alt=""
        />

        <h1>{game?.name}</h1>
        <img src={game?.image} alt={game?.name} />

        <div>
          <p>Description: {game?.description}</p>
          <p>Instructions:</p>

          <iframe
            width="400"
            height="240"
            src={game?.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
