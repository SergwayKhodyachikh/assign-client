import styled, { css } from 'styled-components';
import { Container } from '@material-ui/core';

export const RegistrationContainer = styled(Container).attrs({ maxWidth: 'xs' })`
  ${({ theme }) => css`
    padding: 2rem 4rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: ${theme.shadows[5]};
  `}
`;
