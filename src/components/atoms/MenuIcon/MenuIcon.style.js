import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  height: 90%;
  width: 100%;
  color: ${({ theme }) => theme.colors.violet};
`;
