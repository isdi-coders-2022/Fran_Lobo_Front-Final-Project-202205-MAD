import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iGame, iStore } from '../../interfaces/interfaces';
import { updateUserAction } from '../../reducers/users/action.creators';
import { ApiGames } from '../../services/api';

export function CardFav({ game }: { game: iGame }) {
  const apiGames = new ApiGames();
  const dispatcher = useDispatch();
  const user = useSelector((store: iStore) => store.user);
  const handleDelete = () => {
    apiGames
      .deleteFav(user.id as string, game._id as string, user.token as string)
      .then((data) => {
        dispatcher(updateUserAction(data));
      });
  };
  return (
    <article className="card">
      <div className="card-inner">
        <span className="card-pin"></span>
        <Link className="nameGame" to={`details/${game._id}`}>
          <div className="card-image">
            <img src={game.image} alt="nombreDelJuego" />
          </div>
        </Link>

        <div className="card-content">
          <div className="card-meta">
            <span className="card-meta-number"></span>
          </div>
          <h2 className="card-title">{game.name}</h2>

          <img
            onClick={handleDelete}
            src="./images/papelera.png"
            className="deleteButton"
            alt=""
          />
        </div>
      </div>
    </article>
  );
}
