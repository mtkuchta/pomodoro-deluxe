import React, { useState } from 'react';
import { AppContainer, Wrapper, StyledHeader } from './MainTemplate.style';

import AppTitle from '../atoms/AppTitle/AppTitle';
import MenuIcon from '../atoms/MenuIcon/MenuIcon';
import Nav from '../molecules/Nav/Nav';

const MainTemplate = ({ children }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleIsNavVisible = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <AppContainer>
      <Wrapper>
        <StyledHeader>
          <AppTitle />
          <MenuIcon onClick={handleIsNavVisible} />
        </StyledHeader>
        <Nav onClick={handleIsNavVisible} isNavVisible={isNavVisible} />
        {children}
      </Wrapper>
    </AppContainer>
  );
};

export default MainTemplate;
