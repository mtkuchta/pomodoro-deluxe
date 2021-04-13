import { NavContainer, StyledLink } from './Nav.style';

const Nav = ({ onClick }) => {
  return (
    <NavContainer>
      <StyledLink onClick={onClick} to="/">
        Timer
      </StyledLink>
      <StyledLink onClick={onClick} to="/tasks">
        Tasks
      </StyledLink>
    </NavContainer>
  );
};

export default Nav;
