import MyProfile from "../../components/mypage/myprofile/MyProfile";
import * as St from "./myPage.style";
import MyPosts from "../../components/mypost/MyPosts";
function MyPage() {
  return (
    <St.MyPageContainer>
      <MyProfile />
      <MyPosts />
    </St.MyPageContainer>
  );
}

export default MyPage;
