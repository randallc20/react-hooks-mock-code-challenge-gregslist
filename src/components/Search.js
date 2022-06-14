import React, {useState} from "react";

function Search({setSearchValue, onSort, checked}) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearchValue(search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
      <label>Sort by Location
        <input
          type="checkbox"
          id="checkbox"
          checked={checked}
          onChange={onSort}
        />
      </label>
    </form>
  );
}

export default Search;
