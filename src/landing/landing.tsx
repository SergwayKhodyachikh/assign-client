import React, { Fragment } from 'react';
import { About } from './about';
import { Features } from './features';
import { Footer } from './footer';
import { LandingHeader } from './landing-header';
import { ScrollUpButton } from './scroll-up-button';

export const Landing: React.FC = () => {
  return (
    <Fragment>
      <LandingHeader />
      <About />
      <Features />
      <Footer />
      <ScrollUpButton />
    </Fragment>
  );
};
