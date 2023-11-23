import React from "react";
import PhotoIcon from "../uploadphoto/uploadpic.png";
import { Img, Photos } from "./uploadphotos.style";
function UploadPhoto() {
  const uploadPhotoHandler = () => {
    console.log("사진클릭");
  };
  return (
    <Photos onClick={uploadPhotoHandler}>
      <Img src={PhotoIcon} alt="Photo" />
    </Photos>
  );
}

export default UploadPhoto;
