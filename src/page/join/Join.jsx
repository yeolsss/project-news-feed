import JoinHeader from "../../components/joinHeader/JoinHeader";
import JoinMain from "../../components/joinMan/JoinMain";
import * as St from "./join.style";

function Join() {
  return (
    <St.JoinContainer>
      <JoinHeader />
      <JoinMain />
    </St.JoinContainer>
  );
}

export default Join;
