import styled from 'styled-components';

export const StyledTime = styled.div`
  width: 90%;
  height: 10%;
  font-size: 1.5em;
  text-align: center;
  padding: 5px 0;
  border-top: 2px solid ${({ theme }) => theme.colors.white};

  @media (min-width: 700px) {
    font-size: 2.2em;
    padding: 10px 0;
  }

  @media (min-width: 1024px) {
    font-size: 2.4em;
  }
`;
