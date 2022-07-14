import { useSelector } from 'react-redux';
import { NavBar } from '../../components/layout/nav-bar';
import { List } from '../../components/list';
import { iStore } from '../../interfaces/interfaces';

export default function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <h1>The best Games for users are:</h1>
      <article className="card horizontal">
        <div className="card-inner">
          <span className="card-pin simple"></span>
          <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/71IAp13HzyL._AC_SL1024_.jpg" />
          </div>
          <div className="card-content">
            <div className="card-meta">
              <span className="card-meta-artist">DIXIT</span>
              <button className="card-meta-button">
                <i className="ai-circle-triangle-right-fill"></i>
              </button>
            </div>
          </div>
          <span className="card-pin simple"></span>
        </div>
      </article>
      <article className="card horizontal">
        <div className="card-inner">
          <span className="card-pin simple"></span>
          <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/71M56PJsXlL._AC_SL1024_.jpg" />
          </div>
          <div className="card-content">
            <div className="card-meta">
              <span className="card-meta-artist">AVENTUREROS AL TREN</span>
              <button className="card-meta-button">
                <i className="ai-circle-triangle-right-fill"></i>
              </button>
            </div>
          </div>
          <span className="card-pin simple"></span>
        </div>
      </article>
      <article className="card horizontal">
        <div className="card-inner">
          <span className="card-pin simple"></span>
          <div className="card-image">
            <img src="https://m.media-amazon.com/images/I/71Bp5mDTUAL._AC_SL1500_.jpg" />
          </div>
          <div className="card-content">
            <div className="card-meta">
              <span className="card-meta-artist">PANDEMIC</span>
              <button className="card-meta-button">
                <i className="ai-circle-triangle-right-fill"></i>
              </button>
            </div>
          </div>
          <span className="card-pin simple"></span>
        </div>
      </article>
      <article className="card horizontal">
        <div className="card-inner">
          <span className="card-pin simple"></span>
          <div className="card-image">
            <img src="https://i.ebayimg.com/images/g/p7AAAOSw~5tc4odA/s-l1600.jpg" />
          </div>
          <div className="card-content">
            <div className="card-meta">
              <span className="card-meta-artist">CARCASSONE</span>
              <button className="card-meta-button">
                <i className="ai-circle-triangle-right-fill"></i>
              </button>
            </div>
          </div>
          <span className="card-pin simple"></span>
        </div>
      </article>
      {/*} <List data={games} />*/}
    </>
  );
}
