import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '30%' : '8%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;
