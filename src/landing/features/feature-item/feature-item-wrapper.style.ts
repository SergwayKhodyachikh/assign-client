import styled, { css } from 'styled-components';

export const FeatureWrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: 0 1.5rem 4rem rgba(#000, 0.15);
    height: 40rem;
    background: rgba(237, 240, 245, 0.7);
    max-width: 30rem;
    border-radius: 2rem;
    padding: 2rem 3.5rem 1rem;

    ${theme.breakpoints.down('md')} {
      max-width: 29rem;
    }

    ${theme.breakpoints.down('sm')} {
      margin-bottom: 5rem;
    }
  `}
`;
