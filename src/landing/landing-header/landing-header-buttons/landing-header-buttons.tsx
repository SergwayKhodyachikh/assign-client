import React from 'react';

import { LandingHeaderButtonsPrimary } from './landing-header-buttons-primary.style';
import { LandingHeaderButtonsSecondary } from './landing-header-buttons-secondary.style';
import { LandingHeaderButtonsWrapper } from './landing-header-buttons-wrapper';

export const LandingHeaderButtons: React.FC = () => {
  return (
    <LandingHeaderButtonsWrapper>
      <LandingHeaderButtonsPrimary to="/register">join now</LandingHeaderButtonsPrimary>
      <LandingHeaderButtonsSecondary to="/login">sign in</LandingHeaderButtonsSecondary>
    </LandingHeaderButtonsWrapper>
  );
};
