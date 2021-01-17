import styled, { css } from 'styled-components';
import aboutImage from './about-image.svg';

export const AboutImage = styled.img.attrs({ alt: 'about-paragraph', src: aboutImage })`
  ${({ theme }) => css`
    flex: 1;
    max-width: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.breakpoints.down('sm')} {
      display: none;
    }
  `}
`;
