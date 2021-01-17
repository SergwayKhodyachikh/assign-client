// .about__rubric {

import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  illustration: string;
  title: string;
  paragraph: string;
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 5rem;
    }
    ${theme.breakpoints.down('sm')} {
      justify-content: 'center';
      align-items: center;
      margin: 3rem;
      margin-top: 5rem;
    }
  `}
`;
const Image = styled.img.attrs({
  alt: 'about-paragraph',
})`
  ${({ theme }) => css`
    display: none;
    width: 100%;
    max-width: 50rem;
    margin-bottom: 2rem;
    ${theme.breakpoints.down('sm')} {
      display: block;
      max-width: 30rem;
    }
  `}
`;
const Title = styled.h3`
  ${({ theme }) => css`
    font-size: 2.1rem;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;

    ${theme.breakpoints.down('md')} {
      font-size: 1.7rem;
    }
  `}
`;
const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    line-height: 1.7;
    font-weight: 400;
    ${theme.breakpoints.down('md')} {
      font-size: 1.4rem;
    }
    ${theme.breakpoints.down('sm')} {
      max-width: 40rem;
    }
  `}
`;

export const Rubric: React.FC<Props> = ({ illustration, title, paragraph }) => {
  return (
    <Wrapper>
      <Image src={illustration} />
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
    </Wrapper>
  );
};
