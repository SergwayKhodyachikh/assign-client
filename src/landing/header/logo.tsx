import React, { AnchorHTMLAttributes } from 'react';
import { GoProject } from 'react-icons/go';
import styled from 'styled-components';

const Wrapper = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
  color: #fff;
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

const Icon = styled(GoProject)`
  margin-right: 0.3rem;
  font-size: 1.8em;
`;

const Text = styled.h1`
  font-family: 'Permanent Marker';
  user-select: none;
  letter-spacing: 0.3rem;
  font-size: 4rem;
`;

export const Logo = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Wrapper {...props} href="/">
      <Icon />
      <Text>Assign</Text>
    </Wrapper>
  );
};
