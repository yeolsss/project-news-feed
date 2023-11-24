import React from "react";
import NewsList from "../../components/home/newsList/NewsList";

//import SelectBtn from "../../components/home/selectBtn/SelectBtn";
import * as St from "./home.style";
function Home() {
  return (
    <St.HomeContainer>
      <NewsList />
    </St.HomeContainer>
  );
}

export default Home;
