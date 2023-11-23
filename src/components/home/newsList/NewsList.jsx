import React from "react";
import News from "../news/News";
import * as St from "./newsList.style";

function NewsList() {
  return (
    <St.List>
      <News />
    </St.List>
  );
}

export default NewsList;
