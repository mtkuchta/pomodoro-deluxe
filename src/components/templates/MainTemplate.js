import React, { useState } from 'react';
import { Wrapper, StyledHeader } from './MainTemplate.style';

import AppTitle from '../atoms/AppTitle/AppTitle';
import MenuIcon from '../atoms/MenuIcon/MenuIcon';
import Nav from '../molecules/Nav/Nav';

const MainTemplate = ({ children }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleIsNavVisible = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <Wrapper>
      <StyledHeader>
        <AppTitle />
        <MenuIcon onClick={handleIsNavVisible} />
      </StyledHeader>
      {isNavVisible ? <Nav onClick={handleIsNavVisible} /> : null}
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
