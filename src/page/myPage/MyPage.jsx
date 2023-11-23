import MyProfile from "../../components/mypage/myprofile/MyProfile";
import MyPosts from "../../components/mypost/mypost";
import * as St from "./myPage.style";

function MyPage() {
  return (
    <St.MyPageContainer>
      <MyProfile />
      <MyPosts />
    </St.MyPageContainer>
  );
}

export default MyPage;
