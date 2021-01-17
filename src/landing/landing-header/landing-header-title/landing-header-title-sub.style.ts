import styled, { css } from 'styled-components';
import { keyframesMoveInRight } from './keyframes-move-in-right.style';

export const LandingHeaderTitleSub = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    letter-spacing: 1.05em;
    font-size: 0.45em;
    font-weight: 700;
    animation: ${keyframesMoveInRight} 1s ease-out;
    margin-left: -0.5rem;

    ${theme.breakpoints.down('md')} {
      font-size: 1.75rem;
    }
  `}
`;
