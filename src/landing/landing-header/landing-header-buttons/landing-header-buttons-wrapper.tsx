import styled, { css } from 'styled-components';

export const LandingHeaderButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    ${theme.breakpoints.down('xs')} {
      flex-direction: column;
    }
  `}
`;
