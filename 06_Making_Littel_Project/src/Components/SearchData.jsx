import { useState } from "react";



export const SearchData = ({ searchText, setSearchText }) => {
  return (
    <div className="search-data">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={() => console.log(searchText)}>Search</button>
    </div>
  );
};
