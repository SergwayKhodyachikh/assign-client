import { FeatureParagraph } from './feature-item-paragraph.style';
import React from 'react';
import { IconType } from 'react-icons/lib';
import { FeatureWrapper } from './feature-item-wrapper.style';
import { FeatureTitle } from './feature-item-title.style';

interface Props {
  title: string;
  content: string;
  icon: IconType;
}

export const FeatureItem: React.FC<Props> = ({ icon: Icon, title, content }) => {
  return (
    <FeatureWrapper>
      <Icon className="icon" />
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureParagraph>{content}</FeatureParagraph>
    </FeatureWrapper>
  );
};
