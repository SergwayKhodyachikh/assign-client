import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const FooterMenuItemLink = styled(Link)`
  ${({ theme }) => css`
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: capitalize;
      font-size: 1.5rem;
      font-weight: 700;
      display: inline-block;
      transition: all 0.1s;
    }
    &:hover,
    &:active,
    &:focus {
      color: #fff;
    }
    &:focus {
      outline: none;
    }
    ${theme.breakpoints.down('sm')} {
    }
  `}
`;
