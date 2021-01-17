import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const outlined = css`
  color: #e0e0e0;
  border-color: #e0e0e080;

  &:hover {
    background: #e0e0e0;
    color: #000;
  }
`;

interface Props {
  to: string;
  variant: 'outlined' | 'contained';
}

export const ButtonLink = styled(Button).attrs((props: Props) => ({
  variant: props.variant,
  component: Link,
  to: props.to,
}))`
  border-radius: 10rem;
  padding: 1rem 4rem;
  border-width: 0.2rem;
  transition: all 0.5s;
  position: relative;
  ${props => props.variant === 'outlined' && outlined}

  &:hover {
    transform: translateY(-0.3rem);
  }
  &:active {
    transform: translateY(-0.1rem);
  }
`;
