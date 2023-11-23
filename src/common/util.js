/**
 * 입력시 빈값 체크 함수
 * @param  {...any} value 체크할 값들을 받아 배열로 만듦
 * @returns {result: boolean, index: number}
 */
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

/**
 * 입력값이 이메일 형식인지 체크하는 함수
 * @param {*} email
 * @returns typeof boolean
 */
export const checkEmailValidation = (email) => {
  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/i;
  return emailRegExp.test(email);
};

/**
 * input값이 유효성 검사에서 실패할 경우 alert과 함께 focus를 줄 함수
 * @param {*} msg alert에 띄울 메세지
 * @param {*} ref focus를 줄 input의 ref
 */
export const printError = (msg, ref) => {
  alert(msg);
  ref.current && ref.current.focus();
};

/**
 * 비밀번호를 체크할 함수
 * @param {*} password
 * @param {*} passwordCheck
 * @returns typeof boolean
 */
export const passwordCheck = (password, passwordCheck) => {
  return password === passwordCheck;
};
