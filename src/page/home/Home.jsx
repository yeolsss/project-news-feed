import React from "react";
import NewsList from "../../components/home/newsList/NewsList";
import Search from "../../components/home/search/Search";
//import SelectBtn from "../../components/home/selectBtn/SelectBtn";
import * as St from "./home.style";
function Home() {
  return (
    <St.HomeContainer>
      <Search />
      {/* <St.Rows> */}
      {/* <SelectBtn /> */}
      <NewsList />
      {/* <WriteBtn /> */}
      {/* </St.Rows> */}
    </St.HomeContainer>
  );
}

export default Home;
