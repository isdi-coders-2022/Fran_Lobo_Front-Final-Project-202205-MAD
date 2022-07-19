import { Link } from 'react-router-dom';
import { CLIENT_RENEG_WINDOW } from 'tls';
import { iGame } from '../../interfaces/interfaces';

export function CardFav({ game }: { game: iGame }) {
  const handleDelete = () => {};
  return (
    <article className="card">
      <div className="card-inner">
        <span className="card-pin"></span>

        <div className="card-image">
          <Link className="nameGame" to={`details/${game._id}`}>
            <img src={game.image} alt="nombreDelJuego" />
          </Link>
        </div>

        <div className="card-content">
          <div className="card-meta">
            <span className="card-meta-number"></span>
            <button className="card-meta-button">
              <i className="ai-circle-triangle-right-fill"></i>
            </button>
          </div>
          <h2 className="card-title">{game.name}</h2>
          <img src="./images/papelera.png" className="deleteButton" alt="" />
        </div>
      </div>
    </article>
  );
}
