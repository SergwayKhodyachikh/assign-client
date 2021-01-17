import { Container } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const FeatureListWrapper = styled(Container).attrs({ maxWidth: 'lg' })`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
      margin: 10rem 0;
    }
  `}
`;
