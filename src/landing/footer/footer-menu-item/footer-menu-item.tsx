import React from 'react';
import { FooterMenuItemLink } from './footer-menu-item-link.style';
import { FooterMenuItemWrapper } from './footer-menu-item-wrapper.style';

interface Props {
  title: string;
  path: string;
}

export const FooterMenuItem: React.FC<Props> = ({ title, path }) => {
  return (
    <FooterMenuItemWrapper key={title}>
      <FooterMenuItemLink to={path}>{title}</FooterMenuItemLink>
    </FooterMenuItemWrapper>
  );
};
