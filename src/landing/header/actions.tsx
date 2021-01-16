import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ButtonLink } from './button';

const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    ${theme.breakpoints.down('xs')} {
      flex-direction: column;
    }
  `}
`;

const PrimaryButton = styled(ButtonLink).attrs({
  variant: 'contained',
})`
  ${({ theme }) => css`
    animation: ${moveInBottom} 1s ease-out;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
    margin-right: 3rem;

    ${theme.breakpoints.down('xs')} {
      padding: 2rem 4rem;
      margin-right: 0;
      margin-bottom: 5rem;
      margin-top: 3rem;
      font-size: 2rem;
    }
  `}
`;

const SecondaryButton = styled(ButtonLink).attrs({
  variant: 'outlined',
})`
  ${({ theme }) => css`
    animation: ${moveInBottom} 1s ease-out;
    animation-delay: 0.8s;
    animation-fill-mode: backwards;
    ${theme.breakpoints.down('xs')} {
      padding: 2rem 4rem;
      font-size: 2rem;
    }
  `}
`;

export const Actions: React.FC = () => {
  return (
    <HeaderActions>
      <PrimaryButton to="/register">join now</PrimaryButton>
      <SecondaryButton to="/login">sign in</SecondaryButton>
    </HeaderActions>
  );
};
