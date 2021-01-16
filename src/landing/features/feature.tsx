import React from 'react';
import { IconType } from 'react-icons/lib';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: 0 1.5rem 4rem rgba(#000, 0.15);
    height: 40rem;
    background: rgba(237, 240, 245, 0.7);
    max-width: 30rem;
    border-radius: 2rem;
    padding: 2rem 3.5rem 1rem;

    .icon {
      font-size: 4em;
      display: block;
      margin: 2rem auto;
      color: #6c63ff;
    }

    ${theme.breakpoints.down('md')} {
      max-width: 29rem;
    }

    ${theme.breakpoints.down('sm')} {
      margin-bottom: 5rem;
    }
  `}
`;

const Title = styled.h3`
  text-align: center;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 700;
  margin-bottom: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 1.7;
`;

interface Props {
  title: string;
  content: string;
  icon: IconType;
}

const Feature: React.FC<Props> = ({ icon: Icon, title, content }) => {
  return (
    <Wrapper className="feature">
      <Icon className="icon" />
      <Title className="feature__heading">{title}</Title>
      <Paragraph className="feature__paragraph">{content}</Paragraph>
    </Wrapper>
  );
};

export default Feature;
