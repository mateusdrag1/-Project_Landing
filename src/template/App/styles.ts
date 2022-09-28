import styled, { css } from 'styled-components';

export const Container = styled.h1`
  ${({ background }: { background: string }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `}
`;
