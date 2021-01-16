import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const moveInRightTitle = keyframes`
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }

    80% {
      transform: translateX(-1rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
`;

const moveInLeftTitle = keyframes`
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

const TitleWrapper = styled.h1`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #fff;
    text-transform: uppercase;
    font-size: 6rem;
    letter-spacing: 2.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 10rem 0;
    font-weight: 300;
    margin-right: -3rem;
    overflow: hidden;

    &::selection {
      background-color: #fff;
      color: #000;
    }

    .main {
      display: inline-block;
      animation: ${moveInLeftTitle} 1s ease-out;
    }

    .sub {
      display: inline-block;
      letter-spacing: 1.05em;
      font-size: 0.45em;
      font-weight: 700;
      animation: ${moveInRightTitle} 1s ease-out;
      margin-left: -0.5rem;
    }

    ${theme.breakpoints.down('md')} {
      font-size: 2.5rem;
      .sub {
        font-size: 1.75rem;
      }
    }

    ${theme.breakpoints.down('xs')} {
      display: none;
    }
  `}
`;

export const Title: React.FC = () => {
  return (
    <TitleWrapper>
      <span className="main">assign your team</span>
      <span className="sub">to the right direction</span>
    </TitleWrapper>
  );
};
