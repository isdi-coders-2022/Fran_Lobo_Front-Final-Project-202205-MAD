export function Footer() {
  return (
    <footer className="menu">
      <div className="menu-inner">
        <a href="./home.html" className="menu-item active">
          <i className="ai-home"></i>
          <p>Home</p>
        </a>
        <a href="./pages/ranking.html" className="menu-item">
          <i className="ai-heart"></i>
          <p>Favourite</p>
        </a>
        <a href="./pages/ranking.html" className="menu-item">
          <i className="ai-fire"></i>
        </a>
        <a href="./pages/themes.html" className="menu-item">
          <i className="ai-gear"></i>
        </a>
      </div>
    </footer>
  );
}
