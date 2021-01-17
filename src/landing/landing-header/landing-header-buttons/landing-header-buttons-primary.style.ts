import styled, { css } from 'styled-components';
import { ButtonLink } from './landing-header-button-default';
import { keyframesMoveInBottom } from './keyframes-move-in-bottom.style';

export const LandingHeaderButtonsPrimary = styled(ButtonLink).attrs({
  variant: 'contained',
})`
  ${({ theme }) => css`
    animation: ${keyframesMoveInBottom} 1s ease-out;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
    margin-right: 3rem;

    ${theme.breakpoints.down('xs')} {
      padding: 2rem 4rem;
      margin-right: 0;
      margin-bottom: 5rem;
      margin-top: 3rem;
      font-size: 2rem;
    }
  `}
`;
