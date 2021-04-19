import { Wrapper, StyledIcon } from './MenuIcon.style';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const MenuIcon = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <StyledIcon icon={faEllipsisV} size="3x" />
    </Wrapper>
  );
};

MenuIcon.propTypes = {
  onClick: PropTypes.func,
};

export default MenuIcon;
