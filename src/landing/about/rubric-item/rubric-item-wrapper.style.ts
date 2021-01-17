import styled, { css } from 'styled-components';

export const RubricWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 5rem;
    }
    ${theme.breakpoints.down('sm')} {
      justify-content: 'center';
      align-items: center;
      margin: 3rem;
      margin-top: 5rem;
    }
  `}
`;
