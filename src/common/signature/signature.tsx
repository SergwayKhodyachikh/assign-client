import React from 'react';
import { SignatureIcon } from './signature-icon.style';
import { SignatureText } from './signature-text.style';

interface Props {}

export const Signature = (props: Props) => {
  return (
    <SignatureText {...props}>
      &copy; Sergway Khodyachikh <SignatureIcon />
    </SignatureText>
  );
};
