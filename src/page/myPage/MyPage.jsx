import { default as MyPosts } from "../../components/mypost/mypost";
import * as St from "./myPage.style";

function MyPage() {
  return (
    <St.MyPageContainer>
      <MyPosts />
    </St.MyPageContainer>
  );
}

export default MyPage;
