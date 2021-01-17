import React from 'react';
import { CopyRightIcon } from './copy-right-icon.style';
import { CopyRightText } from './copy-right-text.style';
import { CopyRightWrapper } from './copy-right-wrapper.style';

export const CopyRight: React.FC = () => {
  return (
    <CopyRightWrapper>
      <CopyRightText>
        CopyRIght &copy; Sergway Khodyachikh <CopyRightIcon />
      </CopyRightText>
    </CopyRightWrapper>
  );
};
