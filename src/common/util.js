export const checkValidation = (...value) => {
  let result = { result: false, index: 0 };
  for (let i = 0; i < value.length; i++) {
    if (value[i].trim() === "") {
      result.result = true;
      result.index = i;
      break;
    }
  }
  return result;
};

export const checkEmailValidation = (email) => {
  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/i;
  return emailRegExp.test(email);
};

export const printError = (msg, ref) => {
  alert(`${msg} 입력해 주세요.`);
  ref !== null ?? ref.current.focus();
};

export const passwordCheck = (password, passwordCheck) => {
  return password === passwordCheck;
};
