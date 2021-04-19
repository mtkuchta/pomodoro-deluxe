import { NavContainer, StyledLink } from './Nav.style';
import PropTypes from 'prop-types';

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

Nav.propTypes = {
  onClick: PropTypes.func,
};

export default Nav;
