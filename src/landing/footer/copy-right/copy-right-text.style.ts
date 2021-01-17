import styled, { css } from 'styled-components';

export const CopyRightText = styled.p`
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
