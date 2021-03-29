import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  height: 90%;
  width: 100%;
  color: ${({ theme }) => theme.colors.violet};
`;

const MenuIcon = () => {
  return (
    <Wrapper>
      <StyledIcon icon={faEllipsisV} size="3x" />
    </Wrapper>
  );
};

export default MenuIcon;
