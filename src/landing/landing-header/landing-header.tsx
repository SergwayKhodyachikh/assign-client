import React from 'react';
import { LandingHeaderWrapper } from './landing-header-wrapper/landing-header-wrapper.style';
import { LandingHeaderTitle } from './landing-header-title';
import { LandingHeaderButtons } from './landing-header-buttons/landing-header-buttons';
import { ScrollDownButton } from './scroll-down-button';
import { LandingHeaderLogo } from './landing-header-logo.style';
// import { LandingHeaderLogo } from './landing-header-logo';

export const LandingHeader = () => {
  return (
    <LandingHeaderWrapper>
      <LandingHeaderLogo />
      <LandingHeaderTitle />
      <LandingHeaderButtons />
      <ScrollDownButton />
    </LandingHeaderWrapper>
  );
};
