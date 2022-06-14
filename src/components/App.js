import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchValue, setSearchValue] = useState("");
  const[checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then(data => setListings(data));
  }, []);

  function handleRemoveListing(id) {
    const newListings = listings.filter((listing) => listing.id !== id);
    setListings(newListings);
  }

  function handleSort() {
    setChecked(checked => !checked)
  }

  function handleNewItemSubmit(newItem){
    const newListings = [...listings, newItem];
    setListings(newListings);
  }

  // const displayedListings = listings.filter((listing) =>
  //   listing.description.toLowerCase().includes(searchValue.toLowerCase())
  //   .sort((listing1, listing2) => {
  //     if (checked === true) {
  //       return listing1.location.localeCompare(listing2.location);
  //     }
  //     return 0;
  //   })
  // );

  const displayedListings = listings
    .filter(listing => listing.description.toLowerCase().includes(searchValue.toLowerCase()))
    .sort((listing1, listing2) => {
      if (checked === true) {
        return listing1.location.localeCompare(listing2.location);
      }
      return 0;
    })

  return (
    <div className="app">
      <Header 
        setSearchValue={setSearchValue}
        checked={checked} 
        onSort={handleSort} 
        onSubmitNewItem={handleNewItemSubmit}
      />
      <ListingsContainer listings={displayedListings} handleRemoveListing={handleRemoveListing}/>
    </div>
  );
}

export default App;
