import { Wrapper, StyledIcon } from './MenuIcon.style';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const MenuIcon = () => {
  return (
    <Wrapper>
      <StyledIcon icon={faEllipsisV} size="3x" />
    </Wrapper>
  );
};

export default MenuIcon;
