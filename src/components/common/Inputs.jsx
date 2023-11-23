import * as St from "../joinMan/joinMain.style";
export const Input = ({
  type,
  placeholder,
  inputRef,
  onChange,
  inputType,
  $error,
}) => {
  return (
    <St.JoinInput
      type={type}
      placeholder={placeholder}
      ref={inputRef}
      onChange={(e) => onChange(e, inputType)}
      $error={$error}
    />
  );
};
