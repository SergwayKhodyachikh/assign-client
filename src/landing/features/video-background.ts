import React from 'react';
import styled from 'styled-components';
import teamWorkVideo from './team-work.mp4';

export const VideoBackground = styled.video.attrs({
  src: teamWorkVideo,
  autoPlay: true,
  loop: true,
  muted: true,
})`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  overflow: hidden;
  object-fit: cover;
`;
