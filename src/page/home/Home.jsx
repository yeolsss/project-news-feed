import React from "react";
import MyProfile from "../../components/mypage/myprofile/MyProfile";
import * as St from "./home.style";

function Home() {
  return (
    <St.HomeContainer>
      <MyProfile />
    </St.HomeContainer>
  );
}

export default Home;
