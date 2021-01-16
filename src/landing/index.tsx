import React, { Fragment } from 'react';
import { About } from './about';
import { Header } from './header';

export const Landing: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <div>features</div>
      <div>scroll button</div>
    </Fragment>
  );
};
