import React from 'react';

import Feature from './feature';
import { VideoBackground } from './video-background';
import { FiUsers, FiFilter, FiEye } from 'react-icons/fi';
import styled, { css } from 'styled-components';
import { Container } from '@material-ui/core';

const FEATURES = [
  {
    title: 'Choose your Teammates',
    content: `Assign provide you the project collaborators system which give you the ability to filter
    unwanted participants and define your teammates rolls in your personal or organization
    projects.`,
    icon: FiUsers,
  },
  {
    title: 'Pick your goals',
    content: `Assign watch features allow you to track the specific information required to make your
    Job done. You can fallow a whole project, specific section of that project or a single
    task with out getting unwanted information.`,
    icon: FiFilter,
  },
  {
    title: 'Team transparency',
    content: `Assign's Task management Push data to clients that gets represented as real-time counters,
    charts or logs that allow users to concurrently edit a document and see each other's
    changes.`,
    icon: FiEye,
  },
];

const renderFeatures = () => FEATURES.map(feature => <Feature key={feature.title} {...feature} />);

const Wrapper = styled.section`
  background-color: rgba(255, 255, 255, 0.6);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

const FeatureContainer = styled(Container).attrs({ maxWidth: 'lg' })`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
      margin: 10rem 0;
    }
  `}
`;

const Features = () => {
  return (
    <Wrapper>
      <VideoBackground />
      <FeatureContainer> {renderFeatures()}</FeatureContainer>
    </Wrapper>
  );
};

export default Features;
