import React, { useState } from "react";
import News from "../news/News";
import Search from "../search/Search";
import SelectBtn from "../selectBtn/SelectBtn";
import WriteBtn from "../wrtieBtn/WriteBtn";
import * as St from "./newsList.style";

function NewsList() {
  const [news, setNews] = useState([]);
  const [tag, setTag] = useState("#전체");
  const [searchInput, setSearchInput] = useState("");

  const searchFilter = news.filter((n) => {
    return (
      n.title.toUpperCase().includes(searchInput.toUpperCase()) ||
      n.content.toUpperCase().includes(searchInput.toUpperCase())
    );
  });

  return (
    <>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <St.Container>
        <SelectBtn tag={tag} setTag={setTag} />
        <St.List>
          <News
            news={news}
            setNews={setNews}
            searchFilter={searchFilter}
            tag={tag}
          />
        </St.List>

        <WriteBtn />
      </St.Container>
    </>
  );
}

export default NewsList;
