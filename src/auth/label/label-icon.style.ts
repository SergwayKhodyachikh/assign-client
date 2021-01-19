import styled from 'styled-components';
import React, { ReactElement } from 'react';
import { IconType } from 'react-icons/lib';

interface Props {
  component: IconType;
}

export const LabelIcon = styled(
  ({ component, ...props }: Props): ReactElement => React.createElement(component, props)
)`
  margin-left: 1rem;
  margin-right: 0.7rem;
  font-size: 1.2em;
`;
