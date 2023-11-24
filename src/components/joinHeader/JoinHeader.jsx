import React from "react";
import { useMatch, useNavigate } from "react-router-dom";
import * as St from "./joinHeader.style";

function JoinHeader() {
  const isMatch = useMatch("/join");
  const navigate = useNavigate();
  const handleOnClick = () => {
    isMatch && navigate(-1);
  };

  return (
    <>
      <St.JoinHeaderSection onClick={handleOnClick}>
        <h1>
          <St.HeaderConst>const</St.HeaderConst> itNews{" "}
          <St.HeaderEqual>=</St.HeaderEqual> document.
        </h1>
        <h1>
          getElementById(<St.HeaderString>"itNews"</St.HeaderString>);
        </h1>
      </St.JoinHeaderSection>
    </>
  );
}

export default JoinHeader;
