import React from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/slice/loadingModal.slice";
import {
  ProgressCircle,
  ProgressInner,
  ProgressText,
  ProgressWrapper,
} from "../common/ProgressCircle";
import * as St from "./loadingModal.style";
function LoadingModal() {
  const isLoading = useSelector(selectLoading);
  return (
    <St.LoadingModalWrapper $isLoading={isLoading}>
      <div>
        <ProgressWrapper>
          <ProgressCircle />
          <ProgressInner />
          <ProgressText>로딩 중...</ProgressText>
        </ProgressWrapper>
      </div>
    </St.LoadingModalWrapper>
  );
}

export default LoadingModal;
