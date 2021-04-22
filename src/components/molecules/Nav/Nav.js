import { NavContainer, StyledLink } from './Nav.style';
import PropTypes from 'prop-types';

const Nav = ({ onClick, isNavVisible }) => {
  return (
    <NavContainer isNavVisible={isNavVisible}>
      <StyledLink onClick={onClick} to="/" exact>
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
