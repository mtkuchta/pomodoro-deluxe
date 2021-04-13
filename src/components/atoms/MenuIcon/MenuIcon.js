import { Wrapper, StyledIcon } from './MenuIcon.style';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const MenuIcon = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <StyledIcon icon={faEllipsisV} size="3x" />
    </Wrapper>
  );
};

export default MenuIcon;
