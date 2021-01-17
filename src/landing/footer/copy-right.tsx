import React from 'react';
import { SiPolymerproject } from 'react-icons/si';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: #151515;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    ${theme.breakpoints.down('sm')} {
    }
  `}
`;

const Text = styled.p`
  ${({ theme }) => css`
    color: #cfcfcf;
    font-weight: 900;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.07rem;
    word-spacing: 0.5rem;
    opacity: 0.5;

    ${theme.breakpoints.down('xs')} {
      font-size: 1.2rem;
    }
  `}
`;

const Icon = styled(SiPolymerproject)`
  margin-left: 1rem;
  display: inline-block;
`;

export const CopyRight = () => {
  return (
    <Wrapper>
      <Text>
        CopyRIght &copy; Sergway Khodyachikh <Icon />
      </Text>
    </Wrapper>
  );
};
