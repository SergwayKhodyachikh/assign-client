import { Logo } from 'common/logo';
import styled, { css } from 'styled-components';
import { keyframesMoveInLeft } from './keyframes-move-in-left.style';

export const LandingHeaderLogo = styled(Logo)`
  ${({ theme }) => css`
    & {
      animation: ${keyframesMoveInLeft} 1s ease-out;
      align-self: flex-start;
      padding: 3rem;

      ${theme.breakpoints.down('xs')} {
        font-size: 3rem;
        align-self: center;
      }
    }
  `}
`;
