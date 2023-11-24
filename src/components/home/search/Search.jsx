import React from "react";
import * as St from "./search.style";
function Search({ searchInput, setSearchInput }) {
  const search = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <St.SearchBox>
      <St.SearchBtn>🔎</St.SearchBtn>
      <St.SearchInput
        placeholder="검색하기"
        value={searchInput}
        onChange={search}
      />
    </St.SearchBox>
  );
}

export default Search;
