import React from 'react';
import styled, { css } from 'styled-components';
import { MenuItem } from './menu-item.interface';
import { MenuItemLink } from './menu-item-link';

const FOOTER_MENU_LIST: MenuItem[] = [
  { title: 'terms and conditions', path: '/' },
  { title: 'privacy notice', path: '/' },
  { title: 'cookie notice', path: '/' },
  { title: 'contact', path: '/' },
];

const Wrapper = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    ${theme.breakpoints.down('sm')} {
      margin-top: 3rem;
    }

    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
`;

const menuItems = () =>
  FOOTER_MENU_LIST.map((item: MenuItem) => <MenuItemLink key={item.title} {...item} />);

export const Menu = () => <Wrapper>{menuItems()}</Wrapper>;
