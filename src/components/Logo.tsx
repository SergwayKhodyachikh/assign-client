import React from 'react';
import { GoProject } from 'react-icons/go';
import styled from 'styled-components';

const StyledLogo = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
  color: #fff;
  padding: 0.1rem 0.2rem;
  transition: all 0.5s;
  &:hover {
    opacity: 0.8;
  }
  &:focus,
  &:active {
    background: radial-gradient(rgba(255, 255, 255, 0.4) 10%, transparent, transparent);
    opacity: 0.8;
    border-radius: 30%;
    outline: none;
  }
`;

const LogoIcon = styled(GoProject)`
  margin-right: 0.3rem;
  font-size: 1.8em;
`;

const LogoText = styled.h1`
  font-family: 'Permanent Marker';
  user-select: none;
  letter-spacing: 0.3rem;
`;



export const Logo: React.FC = () => {
  return (
    <StyledLogo href="/">
      <LogoIcon />
      <LogoText>Assign</LogoText>

    </StyledLogo>
  );
};
