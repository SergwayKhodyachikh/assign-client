import styled from 'styled-components';
import { Theme } from '@material-ui/core';
import { LandingHeaderBackground } from './landing-header-background.style';

export const LandingHeaderWrapper = styled.header<{ theme: Theme }>`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  overflow: hidden;
  ${LandingHeaderBackground}
`;
