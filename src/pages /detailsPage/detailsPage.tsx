import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavBar } from '../../components/layout/nav-bar';
import { ApiGames } from '../../services/api';
import { List } from '../../components/list';
import { iStore, iUser } from '../../interfaces/interfaces';
import { store } from '../../store/store';
import { useNavigate } from 'react-router-dom';

export default function DetailsPage() {
  const { id } = useParams();
  const games = useSelector((store: iStore) => store.games);
  const user = useSelector((store: iStore) => store.user);
  const game = games.find((item) => item._id === id);
  const apiGames = new ApiGames();
  console.log(game?.url);

  


  const addFavourite = () => {
     apiGames.updateOneUser({user.id, user}).then((user) => {
         // dispatcher(loadUserAction(user))
     } }
  };

  return (
    <div className="details-page">
      <>
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
          {/* <video width="400" height="240" controls>
            <source src={game?.url} type="video/mp4" />
          </video> */}

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
      </>
    </div>
  );
}
