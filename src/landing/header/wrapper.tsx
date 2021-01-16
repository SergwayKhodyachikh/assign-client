import styled, { css } from 'styled-components';

import xsBackgroundImage from './assets/landing-logo-image-xs.jpg';
import smBackgroundImage from './assets/landing-logo-image-sm.jpg';
import mdBackgroundImage from './assets/landing-logo-image-md.jpg';
import lgBackgroundImage from './assets/landing-logo-image-lg.jpg';
import xlBackgroundImage from './assets/landing-logo-image-xl.jpg';
import { Theme } from '@material-ui/core';

const backgroundImage = (img: string) => css`
  background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)), url(${img});
`;

export const Wrapper = styled.header<{ theme: Theme }>`
  ${({ theme }) => css`
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-size: cover;
    ${backgroundImage(xlBackgroundImage)}

    ${theme.breakpoints.down('lg')} {
      ${backgroundImage(lgBackgroundImage)};
    }
    ${theme.breakpoints.down('md')} {
      ${backgroundImage(mdBackgroundImage)};
    }

    ${theme.breakpoints.down('sm')} {
      ${backgroundImage(smBackgroundImage)};
    }

    ${theme.breakpoints.down('xs')} {
      ${backgroundImage(xsBackgroundImage)};
    }
  `}
`;
