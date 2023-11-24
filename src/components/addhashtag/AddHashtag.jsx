import * as St from "./addhashtags.style";

function AddHashtag({ tag, handleOnChangeTag }) {
  return (
    <St.Input
      type="text"
      placeholder="해시태그를 입력하세요"
      value={tag}
      onChange={handleOnChangeTag}
    />
  );
}

export default AddHashtag;
