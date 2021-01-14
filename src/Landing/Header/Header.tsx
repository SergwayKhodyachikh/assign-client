import { useTheme } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Logo } from '../components/Logo';
import lg from './assets/landing-logo-image-lg.jpg';
import md from './assets/landing-logo-image-md.jpg';
import sm from './assets/landing-logo-image-sm.jpg';
import xl from './assets/landing-logo-image-xl.jpg';
import xs from './assets/landing-logo-image-xs.jpg';

const setBackgroundImage = (img: string) =>
  `background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)), url(${img});`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 0;

  color: #fff;
  text-transform: uppercase;
  font-size: 5rem;
  letter-spacing: 2.4rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  .title--main {
    display: inline-block;
    font-weight: 300;
  }

  .title--sub {
    display: inline-block;
    letter-spacing: 1.0223em;
    font-size: 0.5em;
    font-weight: 500;
  }
`;

export const Header = () => {
  const { breakpoints } = useTheme();

  const StyledHeader = styled.header`
    min-height: 100vh;
    position: relative;
    background-size: cover;
    ::selection {
      background-color: #fff;
      color: #000;
    }

    ${setBackgroundImage(xl)};

    ${breakpoints.down('lg')} {
      ${setBackgroundImage(lg)};
    }

    ${breakpoints.down('md')} {
      ${setBackgroundImage(md)};
    }

    ${breakpoints.down('sm')} {
      ${setBackgroundImage(sm)};
    }

    ${breakpoints.down('xs')} {
      ${setBackgroundImage(xs)};
    }
  `;

  return (
    <StyledHeader>
      <Title>
        <span className="title--main">assign your team</span>
        <span className="title--sub">to the right direction</span>
      </Title>
    </StyledHeader>
  );
};
