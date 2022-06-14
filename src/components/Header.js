import React from "react";
import Search from "./Search";
import AddItem from "./AddItem";

function Header({setSearchValue, checked, onSort, onSubmitNewItem}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchValue={setSearchValue} checked={checked} onSort={onSort}/>
      <AddItem onSubmitNewItem={onSubmitNewItem}/>
    </header>
  );
}

export default Header;
