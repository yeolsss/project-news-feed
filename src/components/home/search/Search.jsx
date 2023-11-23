import React from "react";
import * as St from "./search.style";
function Search() {
  return (
    <St.SearchBox>
      <St.SearchBtn>🔎</St.SearchBtn>
      <St.SearchInput placeholder="검색하기" />
    </St.SearchBox>
  );
}

export default Search;
