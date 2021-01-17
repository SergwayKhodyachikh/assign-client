import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MenuItem } from './menu-item.interface';

const Item = styled.li`
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

const StyledLink = styled(Link)`
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

export const MenuItemLink = ({ title, path }: MenuItem) => {
  return (
    <Item key={title}>
      <StyledLink to={path}>{title}</StyledLink>
    </Item>
  );
};
