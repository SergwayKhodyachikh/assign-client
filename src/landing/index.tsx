import React, { Fragment } from 'react';
import { Header } from './header';

export const Landing: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <div>about</div>
      <div>features</div>
      <div>scroll button</div>
    </Fragment>
  );
};
