import styled, { css } from 'styled-components';
import { ButtonLink } from './landing-header-button-default';
import { keyframesMoveInBottom } from './keyframes-move-in-bottom.style';

export const LandingHeaderButtonsSecondary = styled(ButtonLink).attrs({
  variant: 'outlined',
})`
  ${({ theme }) => css`
    animation: ${keyframesMoveInBottom} 1s ease-out;
    animation-delay: 0.8s;
    animation-fill-mode: backwards;
    ${theme.breakpoints.down('xs')} {
      padding: 2rem 4rem;
      font-size: 2rem;
    }
  `}
`;
