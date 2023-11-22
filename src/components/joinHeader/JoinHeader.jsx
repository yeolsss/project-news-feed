import React from "react";
import * as St from "./joinHeader.style";

function JoinHeader() {
  return (
    <St.JoinHeaderSection>
      <h1>
        <St.HeaderConst>const</St.HeaderConst> itNews{" "}
        <St.HeaderEqual>=</St.HeaderEqual> document.
      </h1>
      <h1>
        getElementById(<St.HeaderString>"itNews"</St.HeaderString>);
      </h1>
    </St.JoinHeaderSection>
  );
}

export default JoinHeader;
