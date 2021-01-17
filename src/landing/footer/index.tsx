import { Logo } from 'landing/logo';
import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { CopyRight } from './copy-right';
import { Menu } from './menu';

const MenuWrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    background-color: #1e1e1e;
    color: #fff;
    align-items: center;
    font-size: 1.4rem;
    padding: 3rem;

    :hover {
      color: #a8a8a8;
    }

    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
    }
  `}
`;

export const Footer: React.FC = () => {
  return (
    <Fragment>
      <MenuWrapper>
        <Logo />
        <Menu />
      </MenuWrapper>
      <CopyRight />
    </Fragment>
  );
};
