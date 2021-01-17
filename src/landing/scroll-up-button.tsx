import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import Fab from '@material-ui/core/Fab';
import styled from 'styled-components';
import { Zoom } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const FloatingButton = styled(Fab).attrs({
  color: 'primary',
  onClick: () => window.scrollTo({ behavior: 'smooth', top: 0 }),
})`
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  font-size: 2rem;
`;

const ScrollUpButton: React.FC = () => {
  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: window.innerHeight * 0.5,
  });

  return (
    <Zoom in={trigger}>
      <FloatingButton>
        <IoIosArrowUp />
      </FloatingButton>
    </Zoom>
  );
};

export default ScrollUpButton;
