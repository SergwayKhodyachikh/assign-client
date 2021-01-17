import styled, { css } from 'styled-components';

export const CopyRightWrapper = styled.div`
  ${({ theme }) => css`
    background-color: #151515;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    ${theme.breakpoints.down('sm')} {
    }
  `}
`;
