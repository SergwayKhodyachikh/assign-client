import React from 'react';
import { RubricWrapper } from './rubric-item-wrapper.style';
import { RubricImage } from './rubric-item-image.style';
import { RubricTitle } from './rubric-item-title.style';
import { RubricParagraph } from './rubric-item-paragraph.style';

interface Props {
  illustration: string;
  title: string;
  paragraph: string;
}

export const RubricItem: React.FC<Props> = ({ illustration, title, paragraph }) => {
  return (
    <RubricWrapper>
      <RubricImage src={illustration} />
      <RubricTitle>{title}</RubricTitle>
      <RubricParagraph>{paragraph}</RubricParagraph>
    </RubricWrapper>
  );
};
