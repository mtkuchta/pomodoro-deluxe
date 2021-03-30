import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  width: 100%;
  font-size: 2.8em;
  color: ${({ theme }) => theme.colors.violet};
  text-align: center;
  letter-spacing: 1px;
  padding-bottom: 5px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.red};
  text-transform: uppercase;
`;
