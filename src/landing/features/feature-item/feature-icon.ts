import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '@material-ui/core';
import { IconType } from 'react-icons/lib';

interface Props {
  component: IconType;
}

export const FeatureIcon = styled(
  ({ component, ...props }: Props): ReactElement => React.createElement(component, props)
)`
  ${({ theme }: { theme: Theme }) => css`
    font-size: 4em;
    display: block;
    margin: 2rem auto;
    color: ${theme.palette.primary.main};
  `}
`;
