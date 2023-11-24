import React, { useState } from "react";
import News from "../news/News";
import SelectBtn from "../selectBtn/SelectBtn";
import WriteBtn from "../wrtieBtn/WriteBtn";
import * as St from "./newsList.style";

function NewsList() {
  const [news, setNews] = useState([]);

  const [tag, setTag] = useState("#전체");

  return (
    <St.Container>
      <SelectBtn tag={tag} setTag={setTag} />
      <St.List>
        <News news={news} setNews={setNews} tag={tag} />
      </St.List>

      <WriteBtn />
    </St.Container>
  );
}

export default NewsList;
