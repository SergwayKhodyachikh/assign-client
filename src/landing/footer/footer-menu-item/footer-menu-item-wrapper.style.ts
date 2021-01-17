import styled, { css } from 'styled-components';

export const FooterMenuItemWrapper = styled.li`
  ${({ theme }) => css`
    &:not(:last-child) {
      margin-right: 5rem;
    }
    ${theme.breakpoints.down('sm')} {
      &:not(:last-child) {
        margin: 1rem;
      }
      margin: 1rem;
    }
  `}
`;
