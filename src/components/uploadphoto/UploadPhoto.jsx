import React from "react";
import PhotoIcon from "../uploadphoto/uploadpic.png";
import { Img, Photos } from "./uploadphotos.style";

function UploadPhoto() {
  const uploadPhotoHandler = () => {};
  return (
    <Photos onClick={uploadPhotoHandler}>
      <Img src={PhotoIcon} alt="Photo" />
    </Photos>
  );
}

export default UploadPhoto;
