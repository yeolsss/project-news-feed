import React from "react";
import { RegisterAtion } from "./registerations.style";
function Registeration({ handleRegister }) {
  const handleButtonClick = () => {
    handleRegister();
  };
  return <RegisterAtion onClick={handleButtonClick}>등록하기</RegisterAtion>;
}

export default Registeration;
