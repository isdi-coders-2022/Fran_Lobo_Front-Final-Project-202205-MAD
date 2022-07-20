import { createContext, SyntheticEvent, useContext, useState } from 'react';
import { List } from '../list';

export function Search() {
  /*const [search, setSearch] = useState('');
  const searchContext = createContext(search);
  function handleChange(ev: SyntheticEvent) {
    const eventTarget = ev.target as HTMLFormElement;
    setSearch(eventTarget.value);
  }*/
  return (
    <section className="search">
      <div data-testid="1" className="search-inner">
        <button className="search-button">
          <img src="/images/lupa.png" className="lupa" alt="" />
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search your Game"
          //onChange={handleChange}
          //value={search}
        />
      </div>
    </section>
  );
}
