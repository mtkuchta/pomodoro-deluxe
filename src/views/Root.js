import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import MainTemplate from '../components/templates/MainTemplate';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <div></div>
      </MainTemplate>
    </ThemeProvider>
  );
}

export default Root;
