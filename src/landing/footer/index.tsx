import { Logo } from 'common/logo';
import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { FooterSignature } from './footer-signature';
import { Menu } from './footer-menu-list';

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
      <FooterSignature />
    </Fragment>
  );
};
