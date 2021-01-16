import React, { Fragment } from 'react';
import { About } from './about';
import Features from './features';
import { Header } from './header';

export const Landing: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Features />
      <div>scroll button</div>
    </Fragment>
  );
};
