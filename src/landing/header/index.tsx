import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Wrapper } from './wrapper';
import { Logo } from 'landing/logo';
import { Title } from './title';
import { Actions } from './actions';
import { ScrollDownButton } from './scroll-down-button';

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  80% {
    transform: translateX(1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const StyledLogo = styled(Logo)`
  ${({ theme }) => css`
    animation: ${moveInLeft} 1s ease-out;
    align-self: flex-start;
    padding: 3rem;

    ${theme.breakpoints.down('xs')} {
      font-size: 3rem;
      align-self: center;
    }
  `}
`;

export const Header = () => {
  return (
    <Wrapper>
      <StyledLogo href="/" />
      <Title />
      <Actions />
      <ScrollDownButton />
    </Wrapper>
  );
};
