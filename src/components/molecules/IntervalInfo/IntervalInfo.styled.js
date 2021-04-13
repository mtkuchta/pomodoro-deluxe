import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  height: 4%;
  display: flex;
  justify-content: space-around;
`;

export const StyledInterval = styled.p`
  width: 32%;
  height: 100%;
  text-align: center;
  padding-top: 3px;
  font-size: 1.4em;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.violet};
  text-transform: uppercase;

  &.active {
    background-color: ${({ theme }) => theme.colors.violet};
    color: ${({ theme }) => theme.colors.white};
  }
`;
