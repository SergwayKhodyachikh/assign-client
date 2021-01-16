import React from 'react';
import styled, { css } from 'styled-components';

import scutchIllustration from './assets/scutchIllustration.svg';
import choseIllustration from './assets/choseIllustration.svg';
import phoneIllustration from './assets/phoneIllustration.svg';
import illustration from './assets/illustration.svg';

import { Rubric } from './rubric';
import { Container } from '@material-ui/core';

const RUBRICS = [
  {
    title: 'where team work get efficient!',
    paragraph: `Assign's panel is a cross-platform/device task manager that will help you keep your tasks
    organized, detailed and simple: get more work done by breaking your goals down to tasks
    and prioritize them by the sections you define.`,
    illustration: scutchIllustration,
  },
  {
    title: 'where services free!',
    paragraph: `There no service limitations, subscription, or any charges regarding the application, all
    the developers working on that project doing that voluntarily for other developers to use,
    there is a donation option for hosing expenses.`,
    illustration: choseIllustration,
  },
  {
    title: 'where your opinion matters!',
    paragraph: `Got a manual task that you prefer to be automated or a feature that you would like to be
    added to our task manager to make your life easier? Send us feedback and we will try to
    make it happen, our Team always working on forwarding our project and we open for
    suggestions.`,
    illustration: phoneIllustration,
  },
];

const renderRubrics = () => RUBRICS.map(rubric => <Rubric key={rubric.title} {...rubric} />);

const Wrapper = styled.section`
  min-height: 100vh;
  background: #edf0f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LargeContainer = styled(Container).attrs({ maxWidth: 'lg' })`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img.attrs({ alt: 'about-paragraph' })`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.breakpoints.down('sm')} {
      display: none;
    }
  `}
`;

export const About = () => {
  return (
    <Wrapper>
      <LargeContainer>
        <Image src={illustration} />
        <Text>{renderRubrics()}</Text>
      </LargeContainer>
    </Wrapper>
  );
};
