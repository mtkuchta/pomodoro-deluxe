import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  font-size: 3em;
  color: ${({ theme }) => theme.colors.red};
  text-decoration: none;
`;
