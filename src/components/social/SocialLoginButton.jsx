import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { auth, db } from "../../common/firebase";
import { closeLoginModal } from "../../redux/slice/loginModal.slice";
import { JoinButton } from "../joinMan/joinMain.style";
function SocialLoginButton({ SocialType }) {
  const socialArr = ["google", "github"];
  const dispatch = useDispatch();
  const handleOnClickSocialLoginButton = async (socialType) => {
    let provider;
    if (socialType === "google") {
      provider = GoogleAuthProvider;
    } else if (socialType === "github") {
      provider = GithubAuthProvider;
    }

    if (!provider) {
      console.error("Provider is not defined");
      return;
    }
    try {
      const result = await signInWithPopup(auth, new provider());
      const credential = provider.credentialFromResult(result);
      const {
        uid,
        reloadUserInfo: { displayName, screenName, photoUrl },
        metadata,
      } = result.user;
      if (metadata.creationTime === metadata.lastSignInTime) {
        // 이 경우는 사용자가 신규로 회원가입한 경우
        await setDoc(doc(db, "user_info", uid), {
          uid,
          name: displayName,
          nickname: screenName || displayName,
          image_path: photoUrl,
        });
      }
      dispatch(closeLoginModal());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {socialArr.map((socialType, index) => (
        <StButton
          key={socialType + index + ""}
          onClick={() => handleOnClickSocialLoginButton(socialType)}
        >
          {socialType}Login
        </StButton>
      ))}
    </>
  );
}

export default SocialLoginButton;

const StButton = styled(JoinButton)`
  background-color: var(--backgroundColor2);
  font-weight: 700;
  color: var(--textColor1);
`;
