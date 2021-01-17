import styled, { css } from 'styled-components';

export const RubricImage = styled.img.attrs({
  alt: 'about-paragraph',
})`
  ${({ theme }) => css`
    display: none;
    width: 100%;
    max-width: 50rem;
    margin-bottom: 2rem;
    ${theme.breakpoints.down('sm')} {
      display: block;
      max-width: 30rem;
    }
  `}
`;
