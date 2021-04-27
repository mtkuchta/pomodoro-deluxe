import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { PomodoroProvider } from '../../providers/PomodoroProvider';

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <PomodoroProvider>{children}</PomodoroProvider>
    </ThemeProvider>
  );
};
