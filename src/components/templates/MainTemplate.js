import styled from 'styled-components';

import AppTitle from '../atoms/AppTitle/AppTitle';
import MenuIcon from '../atoms/MenuIcon/MenuIcon';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: space-around;
  width: 92%;
  height: 10%;
  margin: 0 auto;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <StyledHeader>
        <AppTitle />
        <MenuIcon />
      </StyledHeader>
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
