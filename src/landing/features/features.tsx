import React from 'react';

import { FeaturesVideoBackground } from './features-video-background.style';
import { FeaturesWrapper } from './features-wrapper.style';
import { FeatureList } from './feature-list';

export const Features = () => {
  return (
    <FeaturesWrapper>
      <FeaturesVideoBackground />
      <FeatureList />
    </FeaturesWrapper>
  );
};
