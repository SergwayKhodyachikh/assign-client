import { keyframes } from 'styled-components';

export const keyframesTouchScroll = keyframes`    
0% {
    transform: translate(-50%, 0);
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  80% {
    transform: translate(-50%, 20px);
  }

  100% {
    opacity: 0;
  }
  `;
