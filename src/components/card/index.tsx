import { Link } from 'react-router-dom';
import { iGame } from '../../interfaces/interfaces';

export function Card({ game }: { game: iGame }) {
  return (
    <Link to={`details/${game._id}`}>
      <article className="card">
        <div className="card-inner">
          <span className="card-pin"></span>
          <div className="card-image">
            <img src={game.image} alt="nombreDelJuego" />
          </div>
          <div className="card-content">
            <div className="card-meta">
              <span className="card-meta-number"></span>
              <button className="card-meta-button">
                <i className="ai-circle-triangle-right-fill"></i>
              </button>
            </div>
            <h2 className="card-title">{game.name}</h2>
            {/*<span className="card-time">9.8/10</span>*/}
          </div>
        </div>
      </article>
    </Link>
  );
}
