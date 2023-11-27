import MyProfile from "../../components/mypage/myprofile/MyProfile";
import * as St from "./myPage.style";
import MyPosts from "../../components/mypost/MyPosts";
import { useEffect } from "react";
import { useLoginContext } from "../../context/login.context";

function MyPage() {
  const { loginChecked } = useLoginContext();
  useEffect(() => {
    loginChecked();
  }, []);
  return (
    <St.MyPageContainer>
      <MyProfile />
      <MyPosts />
    </St.MyPageContainer>
  );
}

export default MyPage;
