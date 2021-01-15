import React, { Fragment } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { theme } from 'styles/theme';
import xsBackgroundImage from './assets/landing-logo-image-xs.jpg';
import smBackgroundImage from './assets/landing-logo-image-sm.jpg';
import mdBackgroundImage from './assets/landing-logo-image-md.jpg';
import lgBackgroundImage from './assets/landing-logo-image-lg.jpg';
import xlBackgroundImage from './assets/landing-logo-image-xl.jpg';
import { GoProject } from 'react-icons/go';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const { xs, sm, md, lg, xl } = theme.breakpoints.values;

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

const setBackground = (img: string) => ``;

const setResponsiveBackground = (img: string, maxWidth: number) => css`
  @media only screen and (max-width: ${xl}) {
    background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)), url(${img});
  }
`;

const Header = styled.header`
  min-height: 100vh;
  position: relative;
  background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
    url('~assets/images/landing-logo-image.jpg');

  background-size: cover;
  padding: 3rem;
  ::selection {
    background-color: #fff;
    color: #000;
  }

  background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
    url(${xlBackgroundImage});

  @media only screen and (max-width: ${lg}) {
    background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
      url(${lgBackgroundImage});
  }
  @media only screen and (max-width: ${md}) {
    background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
      url(${mdBackgroundImage});
  }

  @media only screen and (max-width: ${sm}) {
    background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
      url(${smBackgroundImage});
  }

  @media only screen and (max-width: ${xs}) {
    background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
      url(${xsBackgroundImage});
  }
`;

const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
  color: #fff;
  padding: 0.1rem 0.2rem;
  transition: all 0.5s;

  .icon {
    margin-right: 0.3rem;
    font-size: 1.8em;
  }

  .text {
    font-family: 'Permanent Marker';
    user-select: none;
    letter-spacing: 0.3rem;
  }
  &:hover {
    opacity: 0.8;
  }
  &:focus,
  &:active {
    background: radial-gradient(rgba(255, 255, 255, 0.4) 10%, transparent, transparent);
    opacity: 0.8;
    border-radius: 30%;
    outline: none;
  }
`;

const StyledLogo = styled(Logo)`
  animation: ${moveInLeft} 1s ease-out;

  @media only screen and (max-width: 671px) {
    font-size: 4rem;
    margin-top: 3rem;
    margin-bottom: 10rem;

    text-align: center;
  }
`;

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

const HeaderTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 0;

  color: #fff;
  text-transform: uppercase;
  font-size: 5rem;
  letter-spacing: 2.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;

  .main {
    display: inline-block;
    font-weight: 300;
    animation: ${moveInLeftTitle} 1s ease-out;
  }

  .sub {
    display: inline-block;
    letter-spacing: 1.0223em;
    font-size: 0.5em;
    font-weight: 500;
    animation: ${moveInRightTitle} 1s ease-out;
  }

  @media only screen and (max-width: 1063px) {
    font-size: 4rem;
    letter-spacing: 2rem;
    .sub {
      letter-spacing: 1.02241em;
    }
  }

  @media only screen and (max-width: 671px) {
    display: none;
  }
`;

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
  display: flex;
  justify-content: center;

  .btn {
    border-radius: 10rem;
    padding: 1rem 4rem;
    border-width: 0.2rem;
    transition: all 0.5s;
    position: relative;

    &:hover {
      transform: translateY(-0.3rem);
    }
    &:active {
      transform: translateY(-0.1rem);
    }
  }
  .btn--primary {
    margin-right: 3rem;
    animation: ${moveInBottom} 1s ease-out;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
  }

  .btn--secondary {
    color: #e0e0e0;

    border-color: #e0e0e080;
    animation: ${moveInBottom} 1s ease-out;
    animation-delay: 0.8s;
    animation-fill-mode: backwards;

    &::after {
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    &:hover {
      background: #e0e0e0;
      color: #000;
      &::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
      }
    }
  }
  @media only screen and (max-width: 825px) {
    flex-direction: column;
    align-items: center;
    .btn {
      padding: 2rem 4rem;
      width: 40rem;

      &--primary {
        margin-right: 0;
        margin-bottom: 5rem;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .btn {
      font-size: 2rem;
      width: 35rem;
    }
  }
`;

const ScrollButtonMoveInBottom = keyframes`
  0% {
    opacity: 0;

    transform: translate(-50%, 3rem);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, 0rem);
  }
`;

const scroll = keyframes`    
0% {
    transform: translate(-50%, 0);
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  80% {
    transform: translate(-50%, 20px);
  }

  100% {
    opacity: 0;
  }
  `;

const ScrollDownButton = styled(Button)`
  min-width: 0;
  padding: 0;
  color: #fff;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s;
  border: 2px solid #fff;
  border-radius: 50px;
  width: 30px;
  height: 50px;
  animation: ${ScrollButtonMoveInBottom} 1s ease-out;
  animation-delay: 0.8s;
  animation-fill-mode: backwards;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    background: radial-gradient(#000, #fff);
  }

  &:focus,
  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 1;
  }

  &::before {
    position: absolute;
    background-color: #fff;
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 100%;
    transform: translateX(-50%);
    top: 10px;
    left: 50%;
    animation: ${scroll} 1.3s infinite;
  }

  @media only screen and (max-width: 825px) {
    display: none;
  }
`;

export const Landing = () => {
  return (
    <Fragment>
      <Header>
        <StyledLogo href="/">
          <GoProject className="icon" />
          <h1 className="text">Assign</h1>
        </StyledLogo>
        <HeaderTitle>
          <span className="main">assign your team</span>
          <span className="sub">to the right direction</span>
        </HeaderTitle>
        <HeaderActions>
          <Button
            variant="contained"
            color="default"
            className="btn btn--primary"
            to="/register"
            component={Link}
          >
            join now
          </Button>
          <Button
            variant="outlined"
            color="default"
            className="btn btn--secondary"
            to="/login"
            component={Link}
          >
            sign in
          </Button>
        </HeaderActions>
        <ScrollDownButton
          disableFocusRipple
          id="scroll-down-button"
          onClick={e => {
            e.currentTarget.blur();
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          }}
        >
          <span></span>
        </ScrollDownButton>
      </Header>

      {/* 
      <HeaderTitle />
      <HeaderActions />
      <ScrollDownButton /> */}
      <div>about</div>
      <div>features</div>
      <div>scroll button</div>
    </Fragment>
  );
};
