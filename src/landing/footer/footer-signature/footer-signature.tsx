import { Signature } from 'common/signature';
import React from 'react';
import styled from 'styled-components';
import { FooterSignatureWrapper } from './footer-signature-wrapper.style';

const FooterSignatureText = styled(Signature)`
  opacity: 0.5;
`;

export const FooterSignature: React.FC = () => {
  return (
    <FooterSignatureWrapper>
      <FooterSignatureText />
    </FooterSignatureWrapper>
  );
};
