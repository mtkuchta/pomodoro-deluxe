import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  height: 4%;
  display: flex;
  justify-content: space-around;

  @media (orientation: landscape) {
    flex-direction: column;
    width: 30%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    padding-top: 40px;
  }

  @media (min-width: 700px) {
    width: 70%;
  }

  @media (min-width: 700px) and (orientation: landscape) {
    flex-direction: column;
    width: 30%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    padding-top: 30px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 60%;
    max-width: 800px;
    height: 5%;
    padding-top: 0px;
  }
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

  @media (orientation: landscape) {
    width: 80%;
    height: 10%;
    margin: 5px 0;
    padding-top: 5px;
    font-size: 1.5em;
    letter-spacing: 1px;
  }

  @media (min-width: 700px) {
    font-size: 1.8em;
    padding-top: 8px;
  }

  @media (min-width: 700px) and (orientation: landscape) {
    height: 10%;
    width: 70%;
    font-size: 1.8em;
    padding-top: 8px;
  }

  @media (min-width: 1024px) {
    height: 90%;
    font-size: 2.6em;
    padding-top: 5px;
  }
`;
