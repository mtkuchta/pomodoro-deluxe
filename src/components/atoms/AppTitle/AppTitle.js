import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
`;

const StyledTitle = styled.h1`
  width: 100%;
  height: 100%;
  font-size: 2.4em;
  color: ${({ theme }) => theme.colors.violet};
`;

const AppTitle = () => {
  return (
    <Wrapper>
      <StyledTitle>Pomodoro Deluxe</StyledTitle>
    </Wrapper>
  );
};

export default AppTitle;
