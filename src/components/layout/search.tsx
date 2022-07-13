export function Search() {
  return (
    <section className="search">
      <div className="search-inner">
        <button className="search-button">
          <img src="/images/lupa.png" className="lupa" alt="" />
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search your Game"
        />
      </div>
    </section>
  );
}
