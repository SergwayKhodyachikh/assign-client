import React, { Fragment } from 'react';
import { About } from './about';
import Features from './features';
import { Footer } from './footer';
import { Header } from './header';
import ScrollUpButton from './scroll-up-button';

export const Landing: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Features />
      <Footer />
      <ScrollUpButton />
    </Fragment>
  );
};
