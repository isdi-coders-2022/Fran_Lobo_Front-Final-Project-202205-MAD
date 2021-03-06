import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ApiGames } from '../../services/api';
import { iStore } from '../../interfaces/interfaces';
import { updateUserAction } from '../../reducers/users/action.creators';
import './detailsPage.css';

export default function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const games = useSelector((store: iStore) => store.games);
  const user = useSelector((store: iStore) => store.user);
  const game = games.find((item) => item._id === id);
  const apiGames = new ApiGames();

  const addFavourite = () => {
    // CREAMOS UN OBJETO CON LA INFORMACIÓN ACTUALIZADA DEL USUARIO, POR QUE NUESTRO BACK USA UN UPDATE GENERAL
    const updatedUserInfo = {
      ...user.userData,
      playList: [...(user.userData.playList as string[]), game?._id as string],
    };
    // LLAMAMOS A LA API PARA QUE ACTUALICE LA INFORMACIÓN DEL USUARIO
    apiGames
      .updateOneUser(updatedUserInfo, user.token as string)
      .then((resp) => {
        console.log(resp);
        // CON LA RESPUESTA (USUARIO ACTIALIZADO) LLAMAMOS AL DISPATCHER CON LA ACCIÓN DE ACTUALIZAR USUARIO
        dispatch(updateUserAction(resp));
      });
  };
  const fav = user.userData.playList?.some((idFav) => idFav === id);
  console.log(fav);
  return (
    <>
      <div data-testid="1" className="details-page">
        <div className="wrappperFavoriteButton">
          <h1>{game?.name}</h1>
          {fav ? (
            <img
              onClick={addFavourite}
              src="/images/estrella.png"
              className="favouriteButton"
              alt=""
            />
          ) : (
            <img
              onClick={addFavourite}
              src="/images/favorito.png"
              className="favouriteButton"
              alt=""
            />
          )}
        </div>

        <img className="imageGame" src={game?.image} alt={game?.name} />

        <div>
          <p className="description">Description:</p>
          <p> {game?.description}</p>
          <p className="instructions">Instructions:</p>

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
