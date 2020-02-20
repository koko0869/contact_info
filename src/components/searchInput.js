import React from "react";

const searchInput = ({ onSearch }) => {
  return (
    <div>
      검색 : <input name="search" onChange={onSearch} />
    </div>
  );
};

export default searchInput;
