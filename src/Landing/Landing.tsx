import { makeStyles } from '@material-ui/core';
import { StyleTwoTone } from '@material-ui/icons';
import React, { Fragment } from 'react';
import style from './Landing.module.scss';
import styled from 'styled-components';
import { Header } from './Header/Header';

export const Landing: React.FC = () => {
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
};
