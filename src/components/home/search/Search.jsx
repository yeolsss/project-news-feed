import React from "react";
import * as St from "./search.style";
function Search() {
  return (
    <St.Topper>
      <St.SearchBox>
        <St.SearchBtn>🔎</St.SearchBtn>
        <St.SearchInput placeholder="검색하기" />
      </St.SearchBox>
    </St.Topper>
  );
}

export default Search;
