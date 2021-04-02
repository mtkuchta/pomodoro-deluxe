import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: space-around;
  width: 92%;
  height: 10%;
  margin: 0 auto;
`;
