import styled from 'styled-components';

export const StyledForm = styled.div`
  width: 100%;
  height: 92%;
  background-color: ${({ theme }) => theme.colors.violet};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;

  @media (orientation: landscape) {
    width: 80%;
  }

  @media (min-width: 700px) {
    padding-top: 30px;
  }

  @media (min-width: 700px) and (orientation: landscape) {
    width: 90%;
    padding-top: 10px;
  }

  @media (min-width: 1024px) {
    width: 70%;
    padding-top: 10px;
    background-color: ${({ theme }) => theme.colors.violet};
  }
`;

export const ButtonsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (orientation: landscape) {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0 50px;
  }

  @media (min-width: 700px) {
    padding-top: 20px;
  }

  @media (min-width: 700px) and (orientation: landscape) {
    padding-top: 10px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
`;
