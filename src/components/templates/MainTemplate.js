import { Wrapper, StyledHeader } from './MainTemplate.style';

import AppTitle from '../atoms/AppTitle/AppTitle';
import MenuIcon from '../atoms/MenuIcon/MenuIcon';

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
