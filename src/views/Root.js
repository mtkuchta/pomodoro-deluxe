import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import { PomodoroProvider } from '../providers/PomodoroProvider';
import PomodoroTimer from './PomodoroTimer/PomodoroTimer';

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <PomodoroProvider>
            <Switch>
              <Route path="/" exact>
                <PomodoroTimer />
              </Route>
            </Switch>
          </PomodoroProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
