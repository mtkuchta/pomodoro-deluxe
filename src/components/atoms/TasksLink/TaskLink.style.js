import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  font-size: 3em;
  color: ${({ theme }) => theme.colors.red};
  text-decoration: none;

  @media (min-width: 1024px) {
    font-size: 4em;
  }
`;
