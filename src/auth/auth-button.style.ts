import styled, { css } from 'styled-components';
import { Button, ButtonTypeMap, ExtendButtonBase } from '@material-ui/core';

type AuthButtonType = ExtendButtonBase<ButtonTypeMap<{}, 'button'>>;

export const AuthButton = styled<AuthButtonType>(Button).attrs({
  fullWidth: true,
  color: 'primary',
  variant: 'contained',
})`
  ${({ theme }) => css`
    background: #0073b1;
    height: 4.5rem;
    margin: 1rem 0;
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1.6rem;
    transition: all 0.2s;
    &:hover {
      background: #0073b1;
      box-shadow: ${theme.shadows[5]};
    }
  `}
`;
