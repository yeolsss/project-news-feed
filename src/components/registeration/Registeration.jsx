import React from "react";
import * as St from "./registerActions.style";
function RegisterAction({ handleRegister }) {
  const handleButtonClick = () => {
    handleRegister();
  };
  return (
    <St.RegisterAction onClick={handleButtonClick}>등록하기</St.RegisterAction>
  );
}

export default RegisterAction;
