import { css } from 'styled-components';
import LandingHeaderBackgroundXS from './landing-header-background-xs.jpg';
import LandingHeaderBackgroundSM from './landing-header-background-sm.jpg';
import LandingHeaderBackgroundMD from './landing-header-background-md.jpg';
import LandingHeaderBackgroundLG from './landing-header-background-lg.jpg';
import LandingHeaderBackgroundXL from './landing-header-background-xl.jpg';

const backgroundImage = (img: string) => css`
  background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)), url(${img});
`;

export const LandingHeaderBackground = css`
  ${({ theme }) => css`
    ${backgroundImage(LandingHeaderBackgroundXL)}

    ${theme.breakpoints.down('lg')} {
      ${backgroundImage(LandingHeaderBackgroundLG)};
    }
    ${theme.breakpoints.down('md')} {
      ${backgroundImage(LandingHeaderBackgroundMD)};
    }

    ${theme.breakpoints.down('sm')} {
      ${backgroundImage(LandingHeaderBackgroundSM)};
    }

    ${theme.breakpoints.down('xs')} {
      ${backgroundImage(LandingHeaderBackgroundXS)};
    }
  `}
`;
