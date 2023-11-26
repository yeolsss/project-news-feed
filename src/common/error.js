export const joinErrors = (error) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      return console.log("이미 사용 중인 이메일입니다.");

    case "auth/weak-password":
      return console.log("비밀번호는 6글자 이상이어야 합니다.");

    case "auth/network-request-failed":
      return console.log("네트워크 연결에 실패 하였습니다.");

    case "auth/user-not-found" || "auth/wrong-password":
      return console.log("이메일 혹은 비밀번호가 일치하지 않습니다.");

    case "auth/invalid-email":
      return console.log("잘못된 이메일 형식입니다.");

    case "auth/internal-error":
      return console.log("잘못된 요청입니다.");

    default:
      return console.log("알 수 없는 오류가 발생하였습니다.");
  }
};
