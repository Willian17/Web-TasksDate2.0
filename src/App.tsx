import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
