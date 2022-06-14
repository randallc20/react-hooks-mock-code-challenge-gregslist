import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleRemoveListing}) {
  const listingCard = listings.map((listing) => (
    <ListingCard
      key={listing.id}
      id={listing.id}
      description={listing.description}
      image={listing.image}
      location={listing.location}
      handleRemoveListing={handleRemoveListing}
    />
  ));

  return (
    <main>
      <ul className="cards">
        {listingCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
